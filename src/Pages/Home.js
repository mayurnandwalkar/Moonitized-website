
import ListingHomePageHeader from "../components/ListingHomePageHeader"
import CategoryMenus from "../components/CategoryMenus";
import Categorys from "../components/Categorys";
import Listings from "../components/Listings";




const Home = () => {

    return (
        <>
            <div className="seller-dashaboard-class">
                <ListingHomePageHeader />
                <CategoryMenus />
                <Categorys />
                <Listings/>              
            </div>
        </>
    )
}

export default Home