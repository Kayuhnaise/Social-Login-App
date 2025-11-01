import express from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";

dotenv.config();

const app = express();

// Set up EJS view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Serialize user for session
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

// Facebook OAuth Strategy
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: "/auth/facebook/callback",
  profileFields: ["id", "displayName", "emails", "photos"]
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

// Routes
app.get("/", (req, res) => res.render("index", { user: req.user }));

app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/?error=google_failed" }),
  (req, res) => res.redirect("/profile")
);

app.get("/auth/facebook",
  passport.authenticate("facebook")
);

app.get("/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/?error=facebook_failed" }),
  (req, res) => res.redirect("/profile")
);

app.use((err, req, res, next) => {
  console.error("Auth error:", err); 
  res.status(500).send("Something went wrong with authentication.");
});

app.get("/profile", (req, res) => {
  if (!req.user) return res.redirect("/");
  res.render("profile", { user: req.user });
});

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
