const expect = require("expect")
const mongoose = require("mongoose")
const Park = require("../models/park")
const {loadData, getAllParks, getParkById, addPark, deletePark, updatePark} = require("../utils/parkUtils")

const dbConn = process.env.MONGODB_URI
let parkId = null

before (done => connectToDb(done))

after (done => {
	mongoose.disconnect(()=> done())
})

beforeEach(async function (){
	let park = await setupData()
	parkId = park._id
})

describe("getAllParks",()=>{
	it("should get a park if a park exists", async function (){
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

describe("getParkById",()=>{
	it('username should be test', async function(){
		let req = {
			params:{
				id: parkId
			}
		};
		await getParkById(req).exec((err,park)=>{
			expect(park.username).toBe("test")
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
				description: "test",
				park_created: "1/1/2021",
				park_modified: "2/2/2021"
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
		await deletePark(parkId).exec()
		await getParkById(req).exec((err,park)=>{
			expect(park).toBe(null)
		})
	})
})
afterEach(done => {
	tearDownData().exec(()=> done())
})

function connectToDb(done){
	mongoose.connect(
		dbConn,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		},
		err => {
			if (err){
				console.log("Sorry you have an error connecting to the Database", err)
				done()
			}else{
				console.log("Successfully connected to the Database!")
				done()
			}
		}
	)
}

function setupData(){
	let date = Date.now()
	let testPark = {};
	testPark.title = "Test post"
	testPark.username = "test"
	testPark.content = "This is the first test post"
	testPark.create_date = date
	testPark.modified_date = date
	testPark.category = "";
	return Park.create(testPark)
}

function tearDownData(){
	return Park.deleteMany()
}