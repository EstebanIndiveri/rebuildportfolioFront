import React, { useState } from 'react'
import { Flipper, Flipped } from "react-flip-toolkit";
import './ListSkills.scss';
import react from '../../assets/react-logo.png'

const listData = [...Array(3).keys()];
const createCardFlipId = index => `listItem-${index}`;
const colors = ["#6da5ff", "#7971ea", "#5900d8"];
const shouldFlip = index => (prev, current) =>
  index === prev || index === current;

  const ListItem = ({ index, onClick,color }) => {
    return (
      <Flipped
        flipId={createCardFlipId(index)}
        stagger="card"
        shouldInvert={shouldFlip(index)}
      >
        <div className="listItem" onClick={() => onClick(index)}>
          <Flipped inverseFlipId={createCardFlipId(index)}>
            <div className="listItemContent" style={{backgroundColor:color}}>
              <Flipped
                flipId={`avatar-${index}`}
                stagger="card-content"
                shouldFlip={shouldFlip(index)}
                delayUntil={createCardFlipId(index)}
              >
                <div className="avatar"/>
                    
              </Flipped>
              <div className="description">
                {listData.slice(0, 3).map(i => (
                  <Flipped
                    flipId={`description-${index}-${i}`}
                    stagger="card-content"
                    shouldFlip={shouldFlip(index)}
                    delayUntil={createCardFlipId(index)}
                  >
                    <div />
                  </Flipped>
                ))}
              </div>
            </div>
          </Flipped>
        </div>
      </Flipped>
    );
  };

const ExpandedListItem = ({ index, onClick }) => {
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
        <div className="expandedListItem" onClick={() => onClick(index)}>
          <Flipped inverseFlipId={createCardFlipId(index)}>
            <div className="expandedListItemContent">
              <Flipped
                flipId={`avatar-${index}`}
                stagger="card-content"
                delayUntil={createCardFlipId(index)}
              >
                <div className="avatar avatarExpanded" />
              </Flipped>
              <div className="description">
                {listData.slice(0, 3).map(i => (
                  <Flipped
                    flipId={`description-${index}-${i}`}
                    stagger="card-content"
                    delayUntil={createCardFlipId(index)}
                  >
                    <div />
                  </Flipped>
                ))}
              </div>
              <div className="additional-content">
                {listData.slice(0, 3).map(i => (
                  <div />
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
                  />
                ) : (
                  <ListItem index={index} key={index} onClick={handleClick} color={colors[index % colors.length]}/>
                )}
              </li>
            );
          })}
        </ul>
      </Flipper>
     );
}
 
export default ListSkills;