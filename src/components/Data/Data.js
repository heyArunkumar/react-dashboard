import { FaSearch, FaRegEnvelope, FaTh, FaUser, FaRegArrowAltCircleLeft, FaQuestionCircle, FaRegSun } from "react-icons/fa"
import '../Img/c1.jpg'

export const SidebarData = [

    {
        icon: FaTh,
        heading: "Dashboard"
    },
    {
        icon: FaSearch,
        heading: "Discover Recipes"
    },
    {
        icon: FaRegEnvelope,
        heading: "My Recipes"
    },
    {
        icon: FaUser,
        heading: "Clients"
    },
    {
        icon: FaSearch,
        heading: "Check-Ins"
    },
    {
        icon: FaRegEnvelope,
        heading: "Messages"
    }
];

export const bottomNavMenu = [
    {
        icon: FaRegSun,
        heading: "Account"
    },
    {
        icon: FaQuestionCircle,
        heading: "Help & Support"
    },
    {
        icon: FaRegArrowAltCircleLeft,
        heading: "Logout"
    }
]

export const CardsData = [
    {
        img: <img src={require('../Img/c2.jpg')} alt="card-img" width={50} />,
        name: "Eula Osborn",
        planName: "Weight loss diet",
        progress: "80",
        foodTime: "Breakfast:Udon with Chicken and Garlic Peanuat Dressing",
        progressValue: "15 Jun,2021 9:45AM",
        checkInDate: "15 Apr,2021 9:00AM",
        color: "#00cd5f"
    },
    {
        img: <img src={require('../Img/c1.jpg')} alt="card-img" width={50} />,
        name: "Gregory Ray",
        planName: "Health Plan",
        progress: "31",
        foodTime: "Lunch:Fried Eggs & Mashed Potatoes Breakfast Hash",
        progressValue: "15 Jun,2021 9:45AM",
        checkInDate: "11 Jun,2021 12:45PM",
        color: "#f0ba76"
    },
    {
        img: <img src={require('../Img/c3.jpg')} alt="card-img" width={50} />,
        name: "Lester Barry",
        planName: "Health Plan",
        progress: "71",
        foodTime: "Lunch:Chick Pea Salad with Vegetable Sauce",
        progressValue: "15 Jun,2021 9:45AM",
        checkInDate: "18 Jun,2021 9:45AM",
        color: "#0f66b6"
    },

    {
        img: <img src={require('../Img/c1.jpg')} alt="card-img" width={50} />,
        name: "Louis Bateman",
        planName: "Weight loss diet",
        progress: "62",
        foodTime: "Dinner:Mashed Potatoes Hash",
        progressValue: "15 Jun,2021 9:45AM",
        checkInDate: "11 Jun,2021 12:45PM",
        color: "	#0000FF"

    },
    {
        img: <img src={require('../Img/c3.jpg')} alt="card-img" width={50} />,
        name: "Mina Fields",
        planName: "Weight loss diet",
        progress: "9",
        foodTime: "Breakfast:Boiled Eggs with Vegetable Eggs Sauce",
        progressValue: "15 Jun,2021 9:45AM",
        checkInDate: "No check-ins yet",
        color: "#FF0000"

    },
    {
        img: <img src={require('../Img/c2.jpg')} alt="card-img" width={50} />,
        name: "Myrtle Dennis",
        planName: "Health Plan",
        progress: "79",
        foodTime: "Breakfast:Udon with Chicken and Garlic Peanuat Dressing",
        progressValue: "15 Jun,2021 9:45AM",
        checkInDate: "29 Jun,2021 9:00AM",
        color: "#00cd5f"

    },

    {
        img: <img src={require('../Img/c1.jpg')} alt="card-img" width={50} />,
        name: "Nelson Ade",
        planName: "Weight loss diet",
        progress: "52",
        foodTime: "Lunch:Fried Eggs & Mashed Potatoes Breakfast Hash",
        progressValue: "15 Jun,2021 9:45AM",
        checkInDate: "15 Apr,2021 9:00AM",
        color: "#0f66b6"

    },
    {
        img: <img src={require('../Img/c2.jpg')} alt="card-img" width={50} />,
        name: "Nina Jacobs",
        planName: "Health Plan",
        progress: "70",
        foodTime: "Lunch:Chick Pea Salad with Vegetable Sauce",
        progressValue: "15 Jun,2021 9:45AM",
        checkInDate: "15 Jun,2021 9:45AM",
        color: "#1166af"

    },
    {
        img: <img src={require('../Img/c3.jpg')} alt="card-img" width={50} />,
        name: "Peter Michael",
        planName: "Weight loss diet",
        progress: "73",
        foodTime: "Dinner:Mashed Potatoes Hash",
        progressValue: "15 Jun,2021 9:45AM",
        checkInDate: "15 Jun,2021 9:45AM",
        color: "#00cd5f"

    },
]
