import React  from "react";
import {connect} from "react-redux";
import {createPost , setAlert} from "../redux/actions";
import {Alert} from "./Alert";


class PostForm extends React.Component{



    constructor(props) {
        super(props);
        this.state = {title:"" };
    }

    submitHandler = (event)=>{
        event.preventDefault();
        if(!this.state.title.trim()){
           this.props.setAlert({ content: "Поле пустое! Введите текст!" , type: "success"});

            return;
        }


        const newPost ={
            ...this.state , id: Date.now().toString()
        }
        this.props.createPost(newPost);

        let resetData ={};
        for(let item in this.state){
            resetData[item]='';
        }

        this.setState(resetData);
      //  console.log(this.state)
        
    }
    changeInputHandler = (event)=>{
        event.persist(); // for work with event target ?? need or not??
      //  const field  = event.target.name;
      //  let data = {...this.state};
      //  data[event.target.name] =event.target.value  ;

     //   this.setState( { ...(this.state[event.target.name] = event.target.value ) })
        this.setState( prev =>{
            return { ...prev , ...{[event.target.name]: event.target.value}   };
        })
        this.props.setAlert({ content: ''});

    }


    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                        name={`title`}
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="title"
                    />
                    {this.props.alert.content && <Alert alert={this.props.alert}  />}
                    <button className="btn btn-success my-3" type={`submit`}>Create</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost, setAlert
}
const mapStateToProps = (state)=>{
    return {
        alert: state.app.alert
    }
}
export  default connect(mapStateToProps , mapDispatchToProps)(PostForm)

