import Button from '@mui/material/Button';
import Footer from '../../component/footer/Footer';
import { HeroBackground } from '../../component/hero/HeroBackground';

const PostProject = () => {
  return (
    <>
      <HeroBackground title={"Manage Project"} />
      <div>
      <div className="searchProject">
        
        <div className="mt-4  mb-4 row d-flex col-12 p-4 justify-content-between ">
          <div className="Card border col-lg-3 col-md-6 col-12 mb-2 ">
            <div className="card-body p-3 ">
              <p className="opacity-50">Category / Sub Category</p>
              <h5 className="card-title">Design & Art / Poster Design</h5>
              <h6 className="card-subtitle mb-2 text-muted mt-2">Project Details</h6>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
                sit leo amet diam tempus, aliquam lectus.
              </p>
             <p className="opacity-50">Offers</p>
             <div className='text-end p-3'>
             <Button variant="contained">Manage</Button>
             </div>
            </div>
          </div>
          <div className="Card border col-lg-3 col-md-6 col-12 mb-2">
            <div className="card-body p-3">
              <p className="opacity-50">Category / Sub Category</p>
              <h5 className="card-title">Design & Art / Poster Design</h5>
              <h6 className="card-subtitle mb-2 text-muted mt-2">Project Details</h6>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
                sit leo amet diam tempus, aliquam lectus.
              </p>
             <p className="opacity-50">Offers</p>
             <div className='text-end p-3'>
             <Button variant="contained">Manage</Button>
             </div>
            </div>
          </div>
          <div className="Card border col-lg-3 col-md-6 col-12 mb-2">
            <div className="card-body p-3">
              <p className="opacity-50">Category / Sub Category</p>
              <h5 className="card-title">Design & Art / Poster Design</h5>
              <h6 className="card-subtitle mb-2 text-muted mt-2">Project Details</h6>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
                sit leo amet diam tempus, aliquam lectus.
              </p>
             <p className="opacity-50">Offers</p>
             <div className='text-end p-3'>
             <Button variant="contained">Manage</Button>
             </div>
            </div>
          </div>
         

        </div>
     
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default PostProject;
