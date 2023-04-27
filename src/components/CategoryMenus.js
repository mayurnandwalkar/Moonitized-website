import React from 'react'
const kndaaa = ["Category Example", "Category Example", "Category Example", "Category Example", "Category Example", "Category Example", "Category Example"];
const CategoryMenus = () => {
    return (
        <>
            <section className="mt-5">
                <div className="container">
                    <div className="table-responsive">
                        <table className="table text-white">
                            <tbody>
                                <tr>
                                    {kndaaa.map((trade, index) => (
                                        <td key={index}>
                                            <span>{trade}</span>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoryMenus