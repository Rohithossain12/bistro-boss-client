import SectionTitle from "../SectionTitle/SectionTitle";
import featured from "../../assets/home/featured.jpg";
import './Featured.css'

const FeaturedItems = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-5 my-20">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Featured Item"}
      ></SectionTitle>
 
      <div className="md:flex gap-5 justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
        <div>
            <img src={featured} alt="" />
        </div>
        <div>
            <p>January 01, 2025</p>
            <p className="uppercase">Where can i get some?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut autem quasi expedita odit, placeat nihil eum rerum. Commodi magni possimus quasi maiores dolorum delectus laboriosam dolorem voluptate reprehenderit obcaecati modi eveniet, explicabo perspiciatis fugiat a accusamus cum officiis dolores excepturi culpa itaque vel corrupti voluptatum nobis. Dolorem quia iusto aut.</p>
            <button className="btn btn-outline border-0 text-white border-b-4 border-b-white mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
