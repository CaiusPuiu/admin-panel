import React from 'react';
import './App.css';
import UserAddForm from './componenets/UserAddForm';
import UserList from './componenets/UserList';
import PostsList from './componenets/PostList';
// just a comment
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      color:'blue',
      users: [],
      posts: [],
      usersTrigger: true,
      postsTrigger: false,
      foo:'bar',
            foo1:'bar',

    };

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePostsChange = this.handlePostsChange.bind(this);
  }

  handleBackgroundChange(event) {
    const userBackground = event.target.value;

    this.setState({background: userBackground});
  }

  hadleColorChange(event){
    const userColor = event.target.value;
    this.setState({color: userColor});
  }


  
  handleUserChange(){
      if(this.state.usersTrigger === false){

        this.setState(state => ({usersTrigger: !this.state.usersTrigger, postsTrigger: !this.state.postsTrigger}));
      } 
        else{

          this.setState(state => ({usersTrigger: this.state.usersTrigger, postsTrigger: this.state.postsTrigger}));
        }
    
    
  }

  handlePostsChange(){
    if(this.state.postsTrigger === false){

      this.setState(state => ({ postsTrigger: !this.state.postsTrigger, usersTrigger: !this.state.usersTrigger }));
    } 
      else{

        this.setState(state => ({usersTrigger: this.state.usersTrigger, postsTrigger: this.state.postsTrigger}));
      }
  
  
}
  

  handleDeleteUser(){
    console.log(this.state.users.id);
    const filteredUsers = this.state.users.filter(user => user.id !==4 );
    this.setState({users:filteredUsers});
}


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((usersJson) => {
       
        const filteredJson = usersJson.filter(user=>user.id < 4);
        filteredJson.forEach((user) => {
          if(user.id %2 ===0){
            user.isGoldClient = true
            }
            user.wage = user.id*1000;
          if(user.id % 2 === 0){
            user.picture ="https://deadline.com/wp-content/uploads/2019/10/shutterstock_editorial_10434333bm.jpg"
          }
            else if(user.id % 3 === 0){
              user.picture ="https://www.whitehouse.gov/wp-content/uploads/2021/01/joe_hero.jpg"
             }
                else {
                user.picture ="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/01/23/16114264444946.jpg"
                }


          })
          this.setState({users: filteredJson});
      })

      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json();
      })

      .then((postsJson) => {
        this.setState({posts:postsJson.filter(post => post.id <4)});
        
      })


  }

   updateUsersList(user){
      this.setState((previousState) => {
          return {
            users: [
              ...previousState.users,
              user
            ]
          }
      });
    }

    render(){      
      return (
            <div 
              className="App" 
              style={{
                background: this.state.background,
                color:this.state.color
               }} 
             >
               <UserAddForm updateUsersList={(user) => {this.updateUsersList(user)}}/>
               

               {
                 this.state.postsTrigger === true
                    ? <PostsList posts={this.state.posts}/>
                    : null
               }

              {
                 this.state.usersTrigger === true
                    ? <UserList users={this.state.users}/>
                    : null
               }
               
               
               

               

               <h2 className="panel-title">Panou de Editare</h2>
              <div className="edit-panel">
               

              <label htmlFor="backGroundChange">Schimba culoarea fundalului</label>
              <input type="color" onChange={(event)=>this.handleBackgroundChange(event)}/>
              <label htmlFor="colorChange">Schimba culoarea textului</label>
              <input type="color" onChange={(event)=>this.hadleColorChange(event)}/>
              
              <input type="button" value ="Afiseaza utilizatori" onClick={this.handleUserChange}/>
              <input type="button" value ="Afiseaza postari" onClick={this.handlePostsChange}/>
              <input type="button" value="Sterge utilizator" onClick={()=>this.handleDeleteUser()}/>
               
              </div>

              
           
            </div>
          );
    }

}

export default App;
