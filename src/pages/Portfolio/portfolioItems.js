import jeansPic from "../../assets/jeans.png";
import Bucket from "../../assets/Bucket.png";
import sqlEmployeeTracker from "../../assets/sqlEmployeeTracker";
import socialMediaApp from "../../assets/socialMediaApp";

export const portfolioItems = [
  {
    img: jeansPic,
    title: "Jeans",
    text: "A web application that fetches color palette and image search APIs to allow the user to obtain easy to use themes for any type of creative projects.",
    href: "https://github.com/sjastrow92/Jeans",
    buttonText: "Github Repo",
  },
  {
    img: Bucket,
    title: "Bucket",
    text: "A web application built for the prupose of creating a working bucket list",
    href: "https://github.com/sjastrow92/Bucket",
    buttonText: "Github Repo",
  },
  {
    img: "",
    title: "Root2Roast",
    text: "A social media page for the homegrower who loves to cook! Search edible plants to grow, search a recipe for it, then discuss with other users!",
    href: "https://github.com/sjastrow92/Root2Roast",
    buttonText: "Github Repo",
  },
  {
    img: socialMediaApp,
    title: "Back-End Social Media App",
    text: "A backend application using NoSQL to build an API for a social media web application where users can create, read, update, and delete thoughts. This uses expressJS for routing, a MongoDB database, and the Mongoose ODM",
    href: "https://www.youtube.com/watch?v=tKkNucbbZmw",
    buttonText: "Youtube Walkthrough Video",
  },
  {
    img: sqlEmployeeTracker,
    title: "Employee Tracker ",
    text: "Using PostgreSQL with full CRUD, the user can create, read, update, and delete job roles, salaries, and managers in an employee database",
    href: "https://www.youtube.com/watch?v=BO5sAI2Kk5U&t=1s",
    buttonText: "Youtube Walkthrough Video",
  },
];
