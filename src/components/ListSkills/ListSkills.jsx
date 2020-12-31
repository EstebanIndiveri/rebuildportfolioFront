import React, {  Fragment, useState } from 'react'
import { Flipper, Flipped } from "react-flip-toolkit";
import './ListSkills.scss';
import react from '../../assets/react-logo.png'
// import angular from '../../assets/angular.png'
import flutter from '../../assets/flutter.png'
import ux from '../../assets/unnamed.png'
const listData = [...Array(3).keys()];
const createCardFlipId = index => `listItem-${index}`;
const colors = ["#fafeff", "#FAFEFF", "#F8FEFF"];
// f4f9fa
// f3f9fa
// FAFEFF
// F8FEFF
const data = ["Web Design - FullStack Developer", "UX/UI designer", "MobileDeveloper"];
const subdata=["Web Developer with the most recent frameworks from javascript, css and sass with React Angular, and VueJs","Sigle Page Application and Progressive Web App","User Experience and User Interface focus"];
const uxui=["User Interface","Wireframes, Prototypes and Mockups","Animations and design in Figma, Adobe xd, Invision"];
const mobile=["Design interface","Developer in React-Native, Flutter and Kotlin", "Cross Platform"]
// eslint-disable-next-line
const imgs=[react,ux,flutter]
const shouldFlip = index => (prev, current) =>
  index === prev || index === current;


  const ListItem = ({ index, onClick,color,data,subdata }) => {
    //   console.log(index);
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
                  {index===0?
                  (<img className="avatar" src={react} alt=""/>)
                  :index===1?
                  (<img className="avatar-angular" src={ux} alt=""/>):
                  index===2?
                  (<img className="flutter" src={flutter} alt=""/>):
                  null
                  }
                  {/* (<img className="avatar-angular" src={angular} alt=""/> */}
                  {/* {index===1?(<img className="avatar" src={angular} alt=""/>):null} */}
                {/* <img className={index===0?"avatar":"avatar-angular"} src={index===0?react:angular} alt=""/> */}
                
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

const ExpandedListItem = ({ index, onClick,color,data,subdata,uxui }) => {
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
                {/* <img className={index===0?"avatar":"avatar-angular"} src={index===0?react:angular} alt=""/> */}
                {index===0?
                  (<img className="avatar avatarExpanded" src={react} alt=""/>)
                  :index===1?
                  (<img className="avatar-angular angularExpanded" src={ux} alt=""/>):
                  index===2?
                  (<img className="flutter flutterExpanded" src={flutter} alt=""/>):
                  null
                  }
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
                  {index===0?(
                      <Fragment>
                    <div >{index===0&&subdata[0]}</div>
                  <div>{index===0&&subdata[1]}</div>
                  <div>{index===0&&subdata[2]}</div>

                  </Fragment>)
                  :index===1?
                  (
                    <Fragment>

                    <div>{uxui[0]}</div>
                    <div>{uxui[1]}</div>
                    <div>{uxui[2]}</div>
                    </Fragment>):
                    index===2?
                    (
                        <Fragment>

                        <div>{mobile[0]}</div>
                        <div>{mobile[1]}</div>
                        <div>{mobile[2]}</div>
                        </Fragment>
                    ):
                    null
                  
                  }
                  

              {/* {listData.slice(0, 3).map(i => {
                //   console.log(listData);
                  
                //   return(
                //   <div />
                //   );
                subdata.forEach((datos,index)=>{
                    console.log(datos)
                    return(
                     <div style={{background:"red"}}>{datos}</div>
                    )
                })
              })} */}
                {/* {subdata.forEach((element,inde) => (
                //   <div />
                  <div>{element[inde]}</div>

                //   Creo los adicionales grises gordos
                ))} */}
                {/* {subdata.forEach((datos,index)=>{
                    console.log(index)
                    return(
                     <div>{index}</div>
                    )
                })} */}
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
                //   subdata={subdata[focused%subdata.length]}
                  subdata={subdata}
                  uxui={uxui}
                  />
                ) : (
                  <ListItem 
                  index={index} 
                  key={index} 
                  onClick={handleClick} 
                  color={colors[index % colors.length]}
                  data={data[index % data.length]}
                //   subdata={subdata[index%subdata.length]}

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