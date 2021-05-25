import logo from './logo.svg';
import './App.css';
import {BsPlusCircle} from 'react-icons/bs'
import {FaRegUserCircle} from 'react-icons/fa'
import imageone from '../src/image/imageone.jpg'
import imagetwo from '../src/image/imagetwo.jpg'
import imagethree from '../src/image/imagethree.jpg'
import imagefour from '../src/image/imagefour.jpg'
import imagefive from '../src/image/imagefive.jpg'


import React, { Component } from 'react'

 class Chat extends Component {
  render() {
    return (
      // <div className="userinfo">
      <div className="row chat">
        <div className="col-md-12 chats">
          <h1 >Chats</h1>
          <div className="row ">
          <div className="col-md-12 pt-4 userDetails ">
          <span className="usericonns"><BsPlusCircle /> <img id ="image" src ={imageone} alt="imageone"  /> <img id ="image" src ={imagetwo} alt="imageone"  /> <img id ="image" src ={imagethree} alt="imageone"  /> <img id ="image" src ={imagefour} alt="imageone"  /> </span>
          <p className="useroptions"> All <span className="useroptions">Family</span> <span className="useroptions">Buddies</span></p>
        </div>
        </div>
        {/* <div className="col-md-12 "> */}
          <div className="row userinfo">
            <div className="col-md-1 userfirsticonns">    
          {/* <p className="userfirsticonns"><FaRegUserCircle /> </p> */}
          <img id ="image" src ={imageone} alt="imageone"  /> 
          {/* <span className="userfirstname">Azar Hosseini <br/>Even</span>  */}
           
          {/* <p className="usersecname">All </p> */}
            </div>
            <div className="col-md-2">
              <div className="row userfirstname">
                <div className="col-md-12">
                  <p>Azar Hosseini</p>
                </div>
              </div>
              <div className="row usersecname">
                <div className="col-md-12">
                  <p>Evelyn Allen</p>
                </div>
              </div>
            </div>
          
          </div>
          <div className="row userinfo">
            <div className="col-md-1 userfirsticonns">    
          {/* <p className="userfirsticonns"><FaRegUserCircle /> </p> */}
          <img id ="image" src ={imagetwo} alt="imagetwo"  /> 
          {/* <span className="userfirstname">Azar Hosseini <br/>Even</span>  */}
           
          {/* <p className="usersecname">All </p> */}
            </div>
            <div className="col-md-2">
              <div className="row userfirstname">
                <div className="col-md-12">
                  <p>Kya Tolbent</p>
                </div>
              </div>
              <div className="row usersecname">
                <div className="col-md-12">
                  <p>Precott MacCaferty</p>
                </div>
              </div>
            </div>
          
          </div>
          <div className="row userinfo">
            <div className="col-md-1 userfirsticonns">    
          {/* <p className="userfirsticonns"><FaRegUserCircle /> </p> */}
          <img id ="image" src ={imagethree} alt="imagethree"  /> 
          {/* <span className="userfirstname">Azar Hosseini <br/>Even</span>  */}
           
          {/* <p className="usersecname">All </p> */}
            </div>
            <div className="col-md-2">
              <div className="row userfirstname">
                <div className="col-md-12">
                  <p>Miriam de Jesus</p>
                </div>
              </div>
              <div className="row usersecname">
                <div className="col-md-12">
                  <p>Half Huncot</p>
                </div>
              </div>
            </div>
          
          </div>
          <div className="row userinfo">
            <div className="col-md-1 userfirsticonns">    
          {/* <p className="userfirsticonns"><FaRegUserCircle /> </p> */}
          <img id ="image" src ={imagefive} alt="imagefive"  /> 
          {/* <span className="userfirstname">Azar Hosseini <br/>Even</span>  */}
           
          {/* <p className="usersecname">All </p> */}
            </div>
            <div className="col-md-2">
              <div className="row userfirstname">
                <div className="col-md-12">
                  <p>Yahiro Ayuka</p>
                </div>
              </div>
              <div className="row usersecname">
                <div className="col-md-12">
                  <p>Indu Chakaravarthi</p>
                </div>
              </div>
            </div>
          
          </div>
        {/* </div> */}
        </div>
     </div>
       
    )
  }
}
export default Chat