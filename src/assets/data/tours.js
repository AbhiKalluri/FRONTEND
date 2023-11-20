import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";


const tours = [
  {
    id: "01",
    title: "Jersey",
    city: "AMB MALL",
    distance: 300,
    address: 'Hyderabad',
    price: 9,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "Lathvik",
        rating: 4.2,
      },
      {
        name: "Abhinav",
        rating: 3.8,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "MAJOR",
    city: "PVR CINEMAS",
    distance: 400,
    address: 'MUMBAI',
    price: 9,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "The Great Indian Kicken",
    city: "MULTIPLEX",
    distance: 500,
    address: 'Chennai',
    price: 12,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "PUSHPA",
    city: "INOX CINEMAS",
    distance: 500,
    address: 'BENGALURU',
    price: 9,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "BANG BANG",
    city: "INOX",
    distance: 500,
    address: 'DELHI',
    price: 12,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "SEVEN",
    city: "AGRA CINEMAS",
    distance: 500,
    address: 'AGRA',
    price: 9,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "ADIPURUSH",
    city: "AMB",
    distance: 500,
    address: 'HYDERABAD',
    price: 9,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [

    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "MASSAN",
    city: "PVR",
    distance: 500,
    address: 'JAIPUR',
    price: 9,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [

    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
