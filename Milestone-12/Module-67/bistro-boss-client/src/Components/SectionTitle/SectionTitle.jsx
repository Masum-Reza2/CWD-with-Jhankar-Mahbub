/* eslint-disable react/prop-types */
const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="w-1/4 mx-auto text-center py-10">
            <h5 className="text-yellow-600 mb-2 italic">{subHeading}</h5>
            <h1 className="text-3xl border-y-4 py-2">{heading}</h1>
        </div>
    )
}


export default SectionTitle