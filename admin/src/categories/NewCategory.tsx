import './NewCategory.css';

function NewCategory(props: any) {
    const heading = "Categories";

    const categoryAdd = (props: any) => {
      // props.propsChangeHandler?
    };

    return (
        <div className="categories">
            <h1>Categories</h1>
            <p>{props.test}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default NewCategory;
