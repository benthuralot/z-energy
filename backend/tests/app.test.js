const request = require("supertest");
const app = require("../src/app");
const mongoose = require("mongoose");

// Mock the mongoose connection
beforeAll(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/phase1_test", {
  });
  // Optional: seed test data here if needed
});

afterAll(async () => {
  await mongoose.connection.close();
});

// Mock the database connection
describe("GET /", () => {
  it("should return a welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Welcome to Mission 5 Phase 1 API");
  });
});

// Mock the auction seeding endpoint
describe("POST /api/auctions/seed", () => {
  it("should seed auction data and return success message", async () => {
    const res = await request(app).post("/api/auctions/seed");
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("Auction data seeded successfully");
  });
});

describe('DELETE /api/auctions/seed', () => {
    it("should delete all seeded auction data and return success message", async () => {
        const res = await request(app).delete("/api/auctions/seed");
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Auction data deleted successfully");
    });     
});

describe("GET /api/auctions/search?q=somekeyword", () => {
  it("should return search results for auctions", async () => {
    const res = await request(app).get("/api/auctions/search?q=somekeyword");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("results");
    expect(Array.isArray(res.body.results)).toBe(true);
  });
});
