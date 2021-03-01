import React from 'react';
import './UserAddForm.css'

class UserAddForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
                name: '',
                email: '',
                wage: '',
                picture: '',
                isGoldClient: false,
                emailError:'',
                id: ''
        };
    }

    handleNameChange(event) {
        const inputValue = event.target.value;
        this.setState({name: inputValue});
    }

    handleEmailChange(event) {
        const inputValue = event.target.value;
        this.setState({email: inputValue});
    }

    handleWageChange(event) {
        const inputValue = event.target.value;
        this.setState({wage: inputValue});
    }

    handlePictureChange(event) {
        const inputValue = event.target.value;
        this.setState({picture: inputValue});
    }

    handleIsGoldClientChange(event) {
        const inputValue = event.target.checked;
        this.setState({isGoldClient: inputValue});
    }
    

    handleFormSubmit(event) {
        event.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            wage: this.state.wage,
            picture: this.state.picture,
            isGoldClient: this.state.isGoldClient,
            id: 4
        };
        const isValid = this.validateForm();
        if(isValid){
            
            this.props.updateUsersList(newUser);
        }
    }

    validateForm () {
        let emailError ='';
        if(!this.state.email.includes('.',)){
            emailError= "Email Invalid";    
        }
        if(!this.state.email.includes('.')){
            emailError= "Email Invalid";    
        }


        if(emailError){
            this.setState({emailError});
            return false;
        }
        return true;
        
    }

    render () {
        return (
                <form 
                    className="user-add-form"
                    onSubmit={(event) => {this.handleFormSubmit(event)}}
                >
                    <h2>Adaugaun utilizator nou:</h2>

                    <label htmlFor="name">Nume:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={this.state.name} 
                        onChange={(event) =>{this.handleNameChange(event)}}
                        placeholder="Nume"
                        required="required"
                    />

                    <label htmlFor="email">E-mail:</label> 
                    <p style={{fontSize: 12, color:"red"}}>
                        {this.state.emailError}
                    </p>

                    <input 
                        type="text" 
                        name="email" 
                        value={this.state.email} 
                        onChange={(event) =>{this.handleEmailChange(event)}}
                        placeholder="Email"
                        required="required"
                    /> 
                
                    
                    <label htmlFor="wage">Salariu:</label>
                     <input 
                        type="number" 
                        name="wage" 
                        value={this.state.wage} 
                        onChange={(event) =>{this.handleWageChange(event)}}
                        placeholder="salariu"
                        required="required"
                    />
                    
                    <label htmlFor="picture">Fotografie:</label>  
                     <input 
                        type="url" 
                        name="picture" 
                        value={this.state.picture} 
                        onChange={(event) =>{this.handlePictureChange(event)}}
                        placeholder="link pentru fotografie"
                        required="required"
                       
                    />



                    <label htmlFor="gold-clinet">E client gold?</label>
                    <input 
                        type="checkbox" 
                        name="gold-client" 
                        checked={this.state.isGoldClient} 
                        onChange={(event) =>{this.handleIsGoldClientChange(event)}}
                        
                     />

                    <input type="submit" value="Incarca formularul"/>
                </form>
        )
    }
}


export default UserAddForm;