const expect = require("expect")
const mongoose = require("mongoose")
const Post = require("../models/post")
const {loadData, getAllParks, getParkById, addPark, deletePark, updatePark} = require("../utils/posts_utilities")

const dbConn = "process.env.MONGODB_URI"
let postId = null

before (done => connectToDb(done))

after (done => {
	mongoose.disconnect(()=> done())
})

beforeEach(async function (){
	let park = await setupData()
	parkId = park._id
})

describe("getAllParks",()=>{
	it("should get a park if it exists", async function (){
		let req = {
			query:{}
		};
		await getAllParks(req).exec((err,parks)=>{
			expect(Object.keys(parks).length).toBe(1)
		})
	})
	it("username should be test", async function(){
		let req = {
			query:{}
		};
		await getAllParks(req).exec((err,parks)=>{
			expect(parks[0].username).toBe('test')
		})
	})
})

describe("getPostById",()=>{
	it('username should be test', async function(){
		let req = {
			params:{
				id: postId
			}
		};
		await getPostById(req).exec((err,post)=>{
			expect(post.username).toBe("test")
		})
	})
})

describe("AddPark", ()=>{
	it("should add a new park", async function(){
		let req ={
			body:{
				title: "New Park",
				username: "Test",
				content: "New park has been added!",
				category: "park"
			}
		};
		await addPark(req).save((err, park)=>{
			expect(park.title).toBe(req.body.title)
		})
	})
})

describe.only("updatePark", ()=>{
	it ("should update the specified park", async function(){
		let req = {
			params:{
				id: parkId
			},
			body:{
				title: "Updated Park",
				username: "test",
				content: "Updated content",
				category: "parks"
			}
		};
		await updatePark(req).exec((err, park)=>{
			expect(park.title).toBe(req.body.title)
		})
	})
})
describe("deletePark", ()=>{
	it("should delete the park", async function(){
		let req = {
			params:{
				id: parkId
			}
		}
		await deletePark(postId).exec()
		await getParkById(req).exec((err,post)=>{
			expect(post).toBe(null)
		})
	})
})
afterEach(done => {
	tearDownData().exec(()=> done())
})

function connectToDb(done){
	mongoose.connect(
		dbConn,
		{//Properties to avoid deprecation warnings
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		},
		err => {//handling errors
			if (err){
				console.log("Error connecting to database", err)
				done()
			}else{
				console.log("Connected to database!")
				done()
			}
		}
	)
}

function setupData(){
	let date = Date.now()
	let testPost = {};
	testPost.title = "Test post"
	testPost.username = "tester"
	testPost.content = "This is the first test post"
	testPost.create_date = date
	testPost.modified_date = date
	testPost.category = "";
	return Post.create(testPost)
}

function tearDownData(){
	return Post.deleteMany()
}