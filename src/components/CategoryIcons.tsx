import {
	Home, ShoppingCart, Devices, Kitchen, FitnessCenter, Pets, DirectionsCar,
	SportsSoccer, Fastfood, LocalCafe, Smartphone, Laptop, Watch, LocalBar,
	Tv, Camera, Book, ChildFriendly, LocalHospital, ElectricBike, LocalGasStation,
	Liquor, LocalPharmacy, Toys, School, MusicNote, Movie, AirlineSeatReclineNormal,
	Flight, DirectionsBoat
} from '@mui/icons-material';
import React from "react";

interface ICategoryIcons {
	[key: string]: React.ReactElement;
}

const CategoryIcons: ICategoryIcons = {
	Home: <Home />,
	ShoppingCart: <ShoppingCart />,
	Devices: <Devices />,
	Kitchen: <Kitchen />,
	FitnessCenter: <FitnessCenter />,
	Pets: <Pets />,
	DirectionsCar: <DirectionsCar />,
	SportsSoccer: <SportsSoccer />,
	FastFood: <Fastfood />,
	LocalCafe: <LocalCafe />,
	Smartphone: <Smartphone />,
	Laptop: <Laptop />,
	Watch: <Watch />,
	LocalBar: <LocalBar />,
	Tv: <Tv />,
	Camera: <Camera />,
	Book: <Book />,
	ChildFriendly: <ChildFriendly />,
	LocalHospital: <LocalHospital />,
	ElectricBike: <ElectricBike />,
	LocalGasStation: <LocalGasStation />,
	Liquor: <Liquor />,
	LocalPharmacy: <LocalPharmacy />,
	Toys: <Toys />,
	School: <School />,
	MusicNote: <MusicNote />,
	Movie: <Movie />,
	AirlineSeatReclineNormal: <AirlineSeatReclineNormal />,
	Flight: <Flight />,
	DirectionsBoat: <DirectionsBoat />
};


export default CategoryIcons;