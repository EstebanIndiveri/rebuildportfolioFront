import React, {  useState } from 'react'
import { Flipper, Flipped } from "react-flip-toolkit";
import './ListSkills.scss';
import react from '../../assets/react-logo.png'
import angular from '../../assets/angular.png'

const listData = [...Array(3).keys()];
const createCardFlipId = index => `listItem-${index}`;
const colors = ["#fafeff", "#FAFEFF", "#F8FEFF"];
// f4f9fa
// f3f9fa
// FAFEFF
// F8FEFF
const data = ["Web Design - FullStack Developer", "MobileDeveloper", "Webapp Developer"];
const subdata=["","Web app","Mobile Developer"]
// eslint-disable-next-line
const imgs=[react,angular]
const shouldFlip = index => (prev, current) =>
  index === prev || index === current;


  const ListItem = ({ index, onClick,color,data,subdata }) => {
      console.log(index);
    return (
      <Flipped
        flipId={createCardFlipId(index)}
        stagger="card"
        shouldInvert={shouldFlip(index)}
      >
        <div className="listItem" onClick={() => onClick(index)} style={{backgroundColor:color}}>
          <Flipped inverseFlipId={createCardFlipId(index)}>
            <div className="listItemContent" style={{backgroundColor:color}}>
            
              <Flipped
                flipId={`avatar-${index}`}
                stagger="card-content"
                shouldFlip={shouldFlip(index)}
                delayUntil={createCardFlipId(index)}
              >
                <img className={index===0?"avatar":"avatar-angular"} src={index===0?react:angular} alt=""/>
                {/* los muestra a los avactares onclose */}
                    
              </Flipped>
              <div className="description">
                {/* {listData.slice(0, 3).map(i => ( */}
                {listData.slice(0, 1).map(i => (
                  <Flipped
                    flipId={`description-${index}-${i}`}
                    stagger="card-content"
                    shouldFlip={shouldFlip(index)}
                    delayUntil={createCardFlipId(index)}
                  >
                    <div>{data}</div>
                    {/* <div>{subdata}</div> */}
                    {/* CREA 3 divs con la clase description */}

                  </Flipped>
                ))}
              </div>
            </div>
          </Flipped>
        </div>
      </Flipped>
    );
  };

const ExpandedListItem = ({ index, onClick,color,data,subdata }) => {
    return (
      <Flipped
        flipId={createCardFlipId(index)}
        stagger="card"
        onStart={el => {
          setTimeout(() => {
            el.classList.add("animated-in");
          }, 400);
        }}
      >
        <div className="expandedListItem" style={{backgroundColor:color}} onClick={() => onClick(index)}>
          <Flipped inverseFlipId={createCardFlipId(index)}>
            <div className="expandedListItemContent ">
              <Flipped
                flipId={`avatar-${index}`}
                stagger="card-content"
                delayUntil={createCardFlipId(index)}
              >
                {/* <div className="avatar avatarExpanded" /> */}
                <img className={index===0?"avatar":"avatar-angular"} src={index===0?react:angular} alt=""/>

                {/* <img className="avatar" src={react} alt="" height="200px" width="200px"/> */}

                {/* ACA crea los avatareas grieses redondos 3 */}
              </Flipped>
              <div className="description">
                {listData.slice(0, 1).map(i => (
                  <Flipped
                    flipId={`description-${index}-${i}`}
                    stagger="card-content"
                    delayUntil={createCardFlipId(index)}
                  >
                    <div>{data}</div>
                    {/* <div /> */}
                    {/* CREA 3 divs con la clase description */}
                  </Flipped>
                ))}
              </div>
              <div className="additional-content mt-5">
                {listData.slice(0, 3).map(i => (
                //   <div />
                  <div>{color}</div>

                //   Creo los adicionales grises gordos
                ))}
              </div>
            </div>
          </Flipped>
        </div>
      </Flipped>
    );
  };
const ListSkills = () => {
    const [focused, setFocused] = useState(false);
    const handleClick=(index)=>{
        setFocused(focused===index?null:index);
    }
    return ( 
        <Flipper
        flipKey={focused}
        className="staggered-list-content"
        spring="gentle"
        staggerConfig={{
          card: {
            reverse: focused!== null
          }
        }}
        decisionData={focused}
      >
        <ul className="list">
          {listData.map(index => {
            return (
              <li key={index}>
                {index ===focused ? (
                  <ExpandedListItem
                    index={focused}
                    onClick={handleClick}
                    color={colors[focused % colors.length]}
                    data={data[focused % data.length]}
                  subdata={subdata[focused%subdata.length]}

                  />
                ) : (
                  <ListItem 
                  index={index} 
                  key={index} 
                  onClick={handleClick} 
                  color={colors[index % colors.length]}
                  data={data[index % data.length]}
                  subdata={subdata[index%subdata.length]}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </Flipper>
     );
}
 
export default ListSkills;