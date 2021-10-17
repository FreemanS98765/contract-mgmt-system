import EventItem from "./EventItem";
import NoEventsFound from "./NoEventsFound";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import "swiper/swiper.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// import 'swiper/css/grid';

import SwiperCore, { Scrollbar, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const UpcomingEvents = (props) => {
  let events = props.events;

  SwiperCore.use([Scrollbar, EffectCoverflow]);

  return (
    <div className="card upcoming-events">
      <div className="card-header">
        <h5>Upcoming Events</h5>
        <span className="icon-text is-align-items-center">
          <span className="icon">
            <FontAwesomeIcon size="lg" icon={faCalendar} />
          </span>
        </span>
      </div>
      <div className="card-content">
        {!events || events.length === 0 ? (
          <NoEventsFound />
        ) : (
          <div className="upcoming-events">
            <Swiper
              modules={[Scrollbar, EffectCoverflow]}
              spaceBetween={5}
              slidesPerView={3}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {events.map((date) => {
                return (
                  <SwiperSlide>
                    <EventItem
                      id={date.id}
                      event="An upcoming event"
                      date={date.endDate}
                      company="Some Company"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
