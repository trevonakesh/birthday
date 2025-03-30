import React from 'react';
import styled from 'styled-components';


const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-info">
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>I Love You So Much!</p>

          <p style={{ fontSize: '18px' }}>From the very first day I met you, I knew there was something extraordinary about you. You have this way of lighting up every room you walk into not just with your smile, but with your kindness, warmth, and the way you genuinely care for everyone around you. Being with you feels like being wrapped in a warm hug, safe and cherished. You've taught me what true love looks like, and I'm endlessly grateful for every second we've shared.</p>

          <p style={{ fontSize: '18px' }}>I love you more than you'll ever know, and I'm so lucky to get to celebrate this milestone with you. Here's to another year of laughter, love, and creating unforgettable memories together.</p>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Trevon</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  
  .card {
   --background: linear-gradient(to left,rgb(158, 24, 202) 0%, #ea5358 100%);
   width: 400px;
   height: 500px;
   padding: 5px;
   border-radius: 1rem;
   overflow: visible;
   background: #f7ba2b;
   background: var(--background);
   position: relative;
   z-index: 1;
  }

  .card::after {
   position: absolute;
   content: "";
   top: 30px;
   left: 0;
   right: 0;
   z-index: -1;
   height: 100%;
   width: 100%;
   transform: scale(0.8);
   filter: blur(25px);
   background:rgb(247, 43, 193);
   background: var(--background);
   transition: opacity .5s;
  }

  .card-info {
   --color: #181818;
   background: var(--color);
   color: var(--color);
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   overflow: visible;
   border-radius: .7rem;
  
  }

  .card:hover::after {
   opacity: 0;
  }

  .card:hover .card-info {
   color:rgb(247, 43, 169);
   transition: color 1s;
  }`;

export default Card;
