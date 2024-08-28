import React from "react";
import { Link } from "react-router-dom";
import Navbarc from "../components/Navbar";
import bg from "../img/bg/bg.jpg";
import PriceList from "../components/PriceList";
const css =
    "background-image: url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center;";

const cssx = {
    width: "100%",
    height: "500px",
    backgroundImage: `url(${bg})`,
    backroundRepeat: "no-repeat",
};
const HomePage = () => {
    return (
        <div>
            <Navbarc />
            <div className="" style={cssx}>
                <div className="bg-green500 pt- rgba-gradient" style={{ Height: "500px" }}></div>

                <div className="bg-gree-500 rgba-gradient grid-row-4" style={{ height: "500px" }}>
                    <div style={{}} className="">
                        <h1 className="flex justify-center content pt-36 font-bold items-center text-white text-4xl">
                            NIASTECH
                        </h1>
                        <p className=" flex items-center  font-bold justify-center pt-5 text-white grid-row-4">
                            Dapatkan Kemudahan Membangun Website Impian Anda
                        </p>
                        <p className=" flex items-center font-bold justify-center pt-2 text-white grid-row-4">
                            Memberikan Solusi Terbaik Untuk Bisnis Anda
                        </p>

                        <div className="flex justify-center pt-6">
                            <Link
                                to="/#"
                                className=" mr-3 bg-green-500 hover:bg-transparent border border-slate-200 text-white text-sm font-bold py-3 px-5  rounded-xm place-items-center"
                            >
                                SELENGKAPNYA
                            </Link>
                            <Link
                                to="/#"
                                className="font-bold text-sm bg-transparent border border-slate-200 text-white font-bold py-3 px-5  rounded-xm place-items-center"
                            >
                                HUBUNGI KAMI
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="font-bold text-3xl text-gray-700 text-center pt-5">PILIH PAKET LAYANAN TERBAIK</h1>
            <p className="text-gray-700 text-center pt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat rerum numquam odio laudantium
            </p>

            <PriceList />
        </div>
    );
};

export default HomePage;
