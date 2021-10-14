import React, { Component } from 'react'
// import data from '../../data/dataGlasses.json'

export default class BaiTapState extends Component {

    arrGlasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "img/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "img/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "img/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "img/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "img/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "img/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "img/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "img/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        glasses: 
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "img/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    changGlasses = (newGlasses) => {
        this.setState({
            glasses:newGlasses
        })
        
    }

    renderGlassesItem = () => {
        return this.arrGlasses.map((glasses,index) => {
          return <div key={index}>
                    <img onClick={() => this.changGlasses(glasses)} className="ml-2 p-2 border border-width-1" src={glasses.url} style={{ width:110, cursor:'pointer' }} />
                </div>
        })
      }

    render() {
        let {glasses} = this.state;
        return (
            <div className="App">
                <div style={{ backgroundImage: 'url("img/background.jpg")', backgroundSize: 'cover', height: '100vh' }}>
                    <style dangerouslySetInnerHTML={{ __html: "\n @keyframes animChangeGlasses1634110841481 {\n from {\n width: 0;\n transform: rotate(45deg);\n opacity: 0;\n}\n\n to {\n width: 150px;\nopacity: 0.7;\ntransform: rotate(0deg);\n}\n}\n"}} />
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', height: '100%' }}>
                        <h3 className="text-center text-light p-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>TRY GLASSES APP ONLINE</h3>
                        <div className="container">
                            <div className="row mt-5 text-center">
                                <div className="col-6">
                                    <div className="position-relative"><img className="position-absolute" src="img/model.jpg" alt="model.jpg" style={{ width: 250 }} /><img className="position-absolute glassesStyle" src={glasses.url} style={{ width: 150, top: 75, right: 70, opacity: '0.7' }} />
                                        <div className="position-relative " style={{ width: 250, top: 200, left: 270, paddingLeft: 15, backgroundColor: 'rgba(255, 127, 0, 0.5)', textAlign: 'left', height: 105 }}>
                                            <span className="font-weight-bold" style={{ color: 'rgb(171, 130, 255)', fontSize: 17 }}>{glasses.name}</span> <br /><span style={{ fontSize: 14, paddingRight: 5, fontWeight: 400 }}>Light pink square
                                                lenses define these sunglasses, ending with amother of pearl effect tip. </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6"><img src="img/model.jpg" alt="model.jpg" style={{ width: 250 }} />
                                </div>
                            </div>
                        </div>
                        <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
                            {this.renderGlassesItem()}
                        </div>
                    </div>
                </div>
            </div>




        )
    }
}
