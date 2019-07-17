import React from 'react';

const Showaddcategory = (props)=> {
    return (
        <form className="ui form" onSubmit={props.onCategorySubmit}>
            <input 
                type="text" 
                name="newCategory" 
                placeholder="Type new category" 
                onChange={props.handleCategory} 
            />
            <button className="ui primary button"> Submit </button>
        </form>
    );
}

export default Showaddcategory;