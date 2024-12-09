import FurnitureBanner from "@/components/banner";
import ProductCard from "@/components/card";
import Footer from "@/components/footer";
import FurnitureGallery from "@/components/funituregallery";
import LeatestProducts from "@/components/gallery";
import Upperheader from "@/components/header";
import NavBar from "@/components/navbar";
import TrendingProducts from "@/components/trending";


export default function statePage(){
    return(
    <div>
        
        
        <Upperheader/>
        <NavBar/>
        <FurnitureBanner/>
        <FurnitureGallery/>
        <LeatestProducts/>
        <TrendingProducts/>
        <ProductCard/>
        <Footer/>
        
    </div>
     );
}