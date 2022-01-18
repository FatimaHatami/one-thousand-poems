import React from "react";
import './Description.css';
const Description=(props)=>{
    return(
        <div className="description">
            <div className="description--image">
                <img src={props.image}></img>
            </div>
            <div className="description--details">
                <div className="description--text">
                <p>تاریخ کهن ایران زمین با پیشینه ای غنی از فرهنگ و هنر، از دیرباز با شعر و
                     ادبیات درهم پیچیده و ایران، مهد پرورش شاعران بزرگی بوده
                     و در گیر و دار فراز و نشیب هایی که در طول تاریخ بر
                     آن گذشته، اما شاهنامه وزین پارسی پرور فردوسی بزرگ،
                     اشعار روح بخش مولانا و عشق بازی اش با حق، غزل های
                     عاشقانه و عارفانه عالم گیر در دیوان حافظ، اندیشه 
                    ژرف و عرفان ناب عطار نیشابوری همه و همه همچون 
                    مرهمی بر زخم های کوچک و بزرگش تسکین داده اند.</p>
                    <div className="description--btns">
                        <button> فال حافظ</button>
                        <button> گنجینه اشعار</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Description;