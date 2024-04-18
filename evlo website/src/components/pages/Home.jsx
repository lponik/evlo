import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  }

  return (
    <div>
        <div>
            
              <div className="stripes-container">
                <img className="stripesimg" src="/src/assets/stripes.jpeg" alt="Stripes" />
                
                <div className="overlay-text-container">
                  
                  <div className="overlay-text">
                    At <span style={{fontStyle: "italic", color: "#f4ce39", textShadow: "2px 2px #000000"}}>EVLO</span>, your vision, is our expertise.
                  </div>     
                  
                  <div className="overlay-text2">
                    Premier Service, Premier Quality.
                  </div>

                  <button className="overlay-button" onClick={navigateToContact}>Book a Free Estimate Today!</button>
                  
                </div>
              </div>
              
        </div>
    </div>
  );
}

export default Home;
