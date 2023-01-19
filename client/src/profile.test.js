const mongoose = require("mongoose");

const Profile = require("../../models/Profiles");


describe("Profile model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.profile(() => {
      done();
    });
  });

  it("has an email address", () => {
    const user = new User({
      email: "someone@example.com",
      password: "password",
    });
    expect(user.email).toEqual("someone@example.com");
  });

  xit("has a password", () => {
    const user = new User({
      email: "someone@example.com",
      password: "password",
    });
    expect(user.password).toEqual("password");
  });

  xit("can list all users", (done) => {
    User.find((err, users) => {
      expect(err).toBeNull();
      expect(users).toEqual([]);
      done();
    });
  });

  xit("can save a user", (done) => {
    const user = new User({
      name: 'Someone',
      email: "someone@example.com",
      password: "password"
    });

    user.save((err) =>  {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();

        expect(users[0]).toMatchObject({
          name: 'Someone',
          email: "someone@example.com",
          password: "password"
        });
        done();
      });
    });
  });
});
