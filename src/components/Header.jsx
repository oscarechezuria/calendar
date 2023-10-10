/* eslint-disable no-unused-vars */
import {useContext} from 'react';
import {
    BiChevronLeft,
    BiChevronRight,
} from "react-icons/bi";
import CalendarContext from "../context/CalendarContext";
import dayjs from "dayjs";

import {useNavigate, useParams} from "react-router-dom";


export default function Header() {

    const {
        // eslint-disable-next-line no-unused-vars
        selectedDate, setCalendar, setCalendarView, calendarView
    } = useContext(CalendarContext);


    //const navigate = useNavigate();

    function jumpNextMonth() {
        let updateSelectedDate = new Date(selectedDate);
        if (view === "day") {
            updateSelectedDate.setDate(selectedDate.getDate() + 4);
            // eslint-disable-next-line no-unused-vars
            let dd = dayjs(updateSelectedDate).format("MM-DD-YYYY");
            //navigate(`/day?date=` + dd)
        } else {
            updateSelectedDate.setMonth(updateSelectedDate.getMonth() + 1);
        }

        setCalendar({
            selectedDate: updateSelectedDate
        });
    }


    function jumpPrevMonth() {
        let updateSelectedDate = new Date(selectedDate);
        if (view === "day") {
            updateSelectedDate.setDate(selectedDate.getDate() - 4);
            // eslint-disable-next-line no-unused-vars
            let dd = dayjs(updateSelectedDate).format("MM-DD-YYYY");
            setCalendar({
                selectedDate: updateSelectedDate
            });
            //navigate(`/day?date=` + dd)
        } else {
            updateSelectedDate.setMonth(updateSelectedDate.getMonth() - 1);
        }

        setCalendar({
            selectedDate: updateSelectedDate
        });
    }


    function resetDate() {
        let now = new Date();
        setCalendar({
            selectedDate: now
        });
        if (view === "day") {
            // eslint-disable-next-line no-unused-vars
            let dd = dayjs(now).format("MM-DD-YYYY");
            //navigate(`/day?date=` + dd)
        }
    }


    /*
    function handleChangeCalendarView(componentName) {
        setCalendarView(componentName);
        navigate("/" + componentName);
    }
    */

    const params = useParams();
    let view = "day" || "month";

    return (
        <header className="flex justify-center py-3 flex-wrap px-3 items-center border-b md:justify-between">

            <div className="flex items-center gap-x-1">
                <div className="col-span-10 flex items-center ml-2 md:ml-6 lg:ml-10 gap-x-1 md:gap-x-4">
                    <button className="btn" onClick={resetDate}>Hoy</button>

                    <div className="flex items-center gap-x-2">
                        <li className="btn btn-circle list-none text-2xl" onClick={jumpPrevMonth}>
                            <BiChevronLeft />
                        </li>
                        <li className="btn btn-circle list-none text-2xl" onClick={jumpNextMonth}>
                            <BiChevronRight />
                        </li>
                    </div>

                </div>
            </div>

            <div className="flex items-center gap-x-2 md:gap-x-8 col-span-6">

                {/***** selected date *****/}
                <div>
                    <h4 className="font-semibold whitespace-nowrap text-xs md:text-base">
                        {dayjs(new Date(selectedDate)).format(
                            view === "day" ? "MMMM DD YYYY" : "MMMM YYYY"
                        )}
                    </h4>
                </div>
                {/*
                <Select
                    withBg={true}
                    value={calendarView}
                    dropdownClass=""
                    onChange={handleChangeCalendarView}
                    renderPlaceholderValue={(v) => (
                        <span>{v.toUpperCase()}</span>
                    )}
                    render={(click) => (
                        <div>
                            <li onClick={() => click("day")} className="mui-select-item">Día</li>
                            <li onClick={() => click("month")} className="mui-select-item">4 Día</li>
                            <li onClick={() => click("month")} className="mui-select-item">Semanal</li>
                        </div>
                    )}>
                </Select>
                */}
            </div>
        </header>
    );
}


