/* eslint-disable react/jsx-key */
import './App.css'
import {useContext, useEffect, useState} from 'react';
import CalendarContext from "../src/context/CalendarContext";
import dayjs from "dayjs";
//import {useSearchParams} from "react-router-dom";
import 'dayjs/locale/es'
import Header from './components/Header';
dayjs.locale('es')


const DayView = () => {
    // eslint-disable-next-line no-unused-vars
    const [dayOption, setDayOption] = useState(4)

    const {selectedDate } = useContext(CalendarContext)
    
    const [data, setData] = useState([])
    // eslint-disable-next-line no-unused-vars

    const [currentDayEvents, setCurrentDayEvents] = useState([])
    //console.log(data)


    useEffect(() => {
        solucion(selectedDate, dayOption)
    },[selectedDate, dayOption])

    const solucion = (selectedDate, dayOption) => {
        
        const month = dayjs(selectedDate).month();
        const year = dayjs(selectedDate).year();
        const day = dayjs(selectedDate).date()
        const daysMatrix = new Array(dayOption).fill([]).map((_id, idx) => {
                return({
                    date: dayjs(new Date(year, month, day + idx)),
                    datos: [{date: dayjs(new Date(year, month, day + idx)), hora: "12 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "1 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "2 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "3 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "4 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "5 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "6 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "7 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "8 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "9 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "10 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "11 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "12 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "1 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "2 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "3 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "4 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "5 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "6 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "7 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "8 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "9 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "10 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "11 PM" }
                            ]
                });
        }
        );
        setData(daysMatrix)
        return daysMatrix
        }


useEffect(() => {

    setTimeout(() => {
        setCurrentDayEvents([
        {
        title: "oscani",
        start: "Thu Oct 05 2023",
        end: "1",
        status: "pending",
        hora: "9 AM",
        label: "#86efac"
        },
        {
        title: "echezuria",
        start: "Thu Oct 05 2023" ,
        end: "1",
        status: "pending",
        hora: "9 AM",
        label: "#86efac"
        },
        {
        title: "onairis",
        start: "Fri Oct 06 2023" ,
        end: "1",
        status: "pending",
        hora: "9 AM|",
        label: "#86efac"
        },
        {
        title: "onairis",
        start: "Fri Oct 06 2023" ,
        end: "1",
        status: "pending",
        hora: "11 AM",
        label: "#86efac"
        },
        {
        title: "oscar",
        start: "Thu Oct 05 2023" ,
        end: "1",
        status: "pending",
        hora: "7 PM",
        label: "#86efac"
        },
        {
        title: "onairis",
        start: "Sat Oct 07 2023" ,
        end: "1",
        status: "pending",
        hora: "12 AM",
        label: "#fca5a5"
        },
        {
        title: "onairis",
        start: "Wed Oct 11 2023" ,
        end: "1",
        status: "pending",
        hora: "11 AM",
        label: "#fca5a5"
        },
        {
        title: "otro",
        start: "Thu Oct 05 2023" ,
        end: "1",
        status: "pending",
        hora: "12 AM",
        label: "#fca5a5"
        },
        {
        title: "otra vez",
        start: "Sat Oct 07 2023" ,
        end: "1",
        status: "pending",
        hora: "12 AM",
        label: "#fca5a5"
        },
        {
        title: "onairis",
        start: "Sat Oct 14 2023" ,
        end: "1",
        status: "pending",
        hora: "12 AM",
        label: "#fca5a5"
        },
        {
        title: "onairis",
        start: "Sat Oct 14 2023" ,
        end: "1",
        status: "pending",
        hora: "11 AM",
        label: "#fca5a5"
        },
        
        
    ])
    console.log("aqui")
    }, 1000);

},[])

    //const [searchParams] = useSearchParams()

    //const dateParams = searchParams.get("date")


/*
    useEffect(() => {
        let isValidDate = dayjs(dateParams).isValid()
        if(isValidDate && dateParams){
            let d = new Date(dateParams)
            setSelectedDate(d)
        } else {
            // let now = dayjs()
            // let currentDate = date || now.date()
            // setSelectedDate(dayjs(new Date(now.year(), monthIndex, currentDate)))
        }
    }, [ dateParams])
*/

    function isCurrentDate(item){
        const parseDate = new Date(item)
        return (selectedDate?.toDateString() === parseDate.toDateString())
        //return (currentDate?.toDateString() === selectedDate?.toDateString())
    }

    const handleHora = (hour) => {
        if (hour === 0) {
            return "12 AM"
        }if (hour < 12) {
            return `${hour} ${"AM"}`
        }if(hour > 12){
            return `${hour - 12} ${"PM"}`
        }else{
            return `${hour} ${"PM"}`
        }
    }
    return (
        <div className='p-4'>
            <Header/>

            <div className="grid grid-cols-4 w-full m-3 pl-6 pr-2 py-4">
                {
                    data.map(((item, idx) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className="relative top-0 flex flex-col items-center ">
                        <span className={`font-normal text-sm text-primary`}>
                            {dayjs(selectedDate).add(idx, "day").locale("es").format("ddd").toLocaleUpperCase()}
                        </span>
                        <h4 className={`font-medium text-md p-2 md:text-xl ${isCurrentDate(item.date) ? "p-6 text-white rounded-full day-circle bg-blue-400" : ""} `}>
                            { dayjs(selectedDate).add(idx, "day").locale("es").format("DD")}
                        </h4>
                    </div>
                    )))
                }
            </div>

            <div className="flex w-full ">
                <div>
                    {
                        Array.from({length: 24}).map((item, hour) => (
                            // eslint-disable-next-line react/jsx-key
                            <div>
                                <div className='grid grid-cols-1 mb-10 mr-1 text-xs w-10 text-end'> 
                                    {handleHora(hour)}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={`grid grid-cols-4 w-full `}>
                    { 
                        // eslint-disable-next-line no-unused-vars
                        data.map((item, index) => (
                            <div key={index} className="cursor-pointer flex flex-col">
                                    {
                                                item.datos.map(ev => (
                                                    <div className='flex justify-center items-start flex-col h-14 border gap-1 p-2'>
                                                        {
                                                                currentDayEvents.map(item => {
                                                                    const parseHour = new Date(ev.date).toDateString()
                                                                    return(
                                                                    ev.hora === item.hora && parseHour === item.start ? (
                                                                        <div 
                                                                            className={`flex items-center w-full truncate px-1 rounded-md text-xs md:text-sm`} 
                                                                            style={{backgroundColor: item.label}}
                                                                            onClick={(e) => console.log(e,item)}
                                                                            >
                                                                            <h2>{item.title}</h2>
                                                                        </div>
                                                                    )
                                                                    :
                                                                    null
                                                                )})
                                                        }
                                                    </div>
                                                ))
                                    }
                            </div>
                        ))
                    }
                </div>
                    
            </div>
        </div>
    );
};

export default DayView;
