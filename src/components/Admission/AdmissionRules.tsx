import React from 'react'

const AdmissionRules = () => {
    return (
        <div className='md:px-32 px-8 bg-gray-100'>
            <div className='py-16 grid grid-cols-2 max-sm:grid-cols-1 gap-8'>
                <div>
                    <h1 className='text-yellow-500 text-xl '>OVERVIEW</h1>
                    <p className='text-3xl font-bold text-[#0C7E81]'>Admission Rules & <br />Regulations</p>
                    <ul className='text-[13px] text-gray-700 list-disc py-8'>
                        <li>Concurrent admission at any other institution is not allowed.</li>
                        <li>Admission obtained on false documentation is liable to disciplinary action.</li>
                        <li>Students must be respectful to the faculty, administrative staff, and fellow students.</li>
                        <li>Any political activity or indecent behavior in or around the campus is a punishable offense.</li>
                        <li>Students must carry ID cards on the campus and at Superior functions.</li>
                        <li>All students are required to follow the dress code.</li>
                        <li>Students must clear their dues before mid-term and final exams; failure to do so will prevent them from appearing in exams.</li>
                        <li>If a student does not maintain a 3.0 CGPA in a semester, their fee scholarship will be terminated.</li>
                        <li>No makeup assignments, quizzes, or presentations are allowed after due dates unless permission is granted by the teacher.</li>
                        <li>Semester dues are non-refundable and non-transferable for any reason.</li>
                    </ul>
                </div>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", maxWidth: "100%", background: "#000" }} className='border-l-[16px] border-b-[16px] border-[#0C7E81]'>
                    <iframe
                        src="https://www.youtube.com/embed/w27-LfLDvew?si=bKlDQwfhqEcGcWOx"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    ></iframe>
                </div>
            </div>
        </div >
    )
}

export default AdmissionRules