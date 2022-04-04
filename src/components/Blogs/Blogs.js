import React from 'react';

const Blogs = () => {
    return (
        <div className='w-5/6 mx-auto mt-3'>
            
            <h1 className='font-bold'>Q1. What is Context Api ?</h1>
            <p>Context Api is a way of passing data to the react application.Passing data in react application  as a prop follows a tree structure.If props needs to pass from root to a node or child component, it has to pass through all nodes between root to the destination node.This process needs huge props drilling which is not good for larger application.Context api has solved this props drilling problem.It gives global power to the data- data can be accessed from root to child node using useContext hook without prop drilling.</p>

            <h1 className='font-bold'>Q2. What is Semantic Tags?</h1>
            <p>Semantic tags are different from other html tags.Semantice tag has a meaning-what type of contents it is containing.A semantic tag tells its itentity to the browser and developer.Some semantic tags-article, footer, table.The article tag describs-it specifies independent, self-contianed content.It tells developer- it can be used in newspaper articles,blog posts ,user comments.the footer tag indicates a footer of a document or section.It contains copyright information,location information,site information,related document.Some non-semantic tags-div ,span.It tells nothing what it can contain.</p>

            <h1 className='font-bold'>Q3. Inline elements vs Block elements vs Inline-Block elements.</h1>
            <table className='my-3'>
                <thead>
                    <tr className='border border-2'><th className='border border-2 p-2'>Inline</th> <th className='border border-2 p-2'>Block</th> <th className='border border-2 p-2'>Inline-Block</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-2 p-2'>An inline element does not start with new line.It only takes width of its content.
                        </td>
                        <td className='border border-2 p-2'>An block element starts with new element.It takes full width.CSS style can be applied.
                        </td>
                        <td className='border border-2 p-2'>An inline element does not start with new line.All CSS style can be applied that except new line.
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    ); 
};

export default Blogs;