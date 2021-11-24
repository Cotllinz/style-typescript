// import {KTSVG} from '../../../_metronic/helpers'
import React from "react";
import { MetroCard } from "../Component";

const ExampleCard = () => {
  return (
    <div className={`card mt-5`}>
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder fs-3 mb-1">Card</span>
        </h3>
        <div className="card-toolbar m-0">
          <button
            type="button"
            className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3"
          >
            {/*  <KTSVG
              path='/media/icons/duotune/general/gen024.svg'
              className='svg-icon-3 svg-icon-primary'
            /> */}
          </button>
        </div>
      </div>
      <div className="card-body">
        <MetroCard className={"my-5"}>
          <MetroCard.Header>
            <MetroCard.Header.Title>Title</MetroCard.Header.Title>
            <MetroCard.Header.Toolbar>
              {/*  <MetroButton light size={"small"}>
                Action
              </MetroButton> */}
            </MetroCard.Header.Toolbar>
          </MetroCard.Header>
          <MetroCard.Body>hai</MetroCard.Body>
          <MetroCard.Footer>Footer</MetroCard.Footer>
        </MetroCard>
        <MetroCard className={"my-5"}>
          <MetroCard.Header>
            <MetroCard.Header.Title>Card Scroll</MetroCard.Header.Title>
          </MetroCard.Header>
          <MetroCard.Body scroll={{ height: 300 }}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </MetroCard.Body>
          <MetroCard.Footer>Footer</MetroCard.Footer>
        </MetroCard>
        <MetroCard cardFlush className={"my-5"}>
          <MetroCard.Header>
            <MetroCard.Header.Title>Title</MetroCard.Header.Title>
            <MetroCard.Header.Toolbar>
              {/* <MetroButton light size={"small"}>
                Action
              </MetroButton> */}
            </MetroCard.Header.Toolbar>
          </MetroCard.Header>
          <MetroCard.Body>
            Use <code>cardFlush = true</code> to remove a card header and footer
            borders:
          </MetroCard.Body>
          <MetroCard.Footer>Footer</MetroCard.Footer>
        </MetroCard>
        <MetroCard className={"my-5"}>
          <MetroCard.Header>
            <MetroCard.Header.Title>Card Layer</MetroCard.Header.Title>
          </MetroCard.Header>
          <MetroCard.Body>
            Hover me
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </MetroCard.Body>
          <MetroCard.Footer>Footer</MetroCard.Footer>
          <MetroCard.Layer>
            <a href="#" className="btn btn-primary btn-shadow">
              Explore
            </a>
            <a href="#" className="btn btn-light-primary btn-shadow ms-2">
              Purchase
            </a>
          </MetroCard.Layer>
        </MetroCard>
        <MetroCard shadow={false} className={"my-5"}>
          <MetroCard.Header>
            <MetroCard.Header.Title>Title</MetroCard.Header.Title>
          </MetroCard.Header>
          <MetroCard.Body>
            Use <code>shadow = false</code> to remove a card shadow
          </MetroCard.Body>
          <MetroCard.Footer>Footer</MetroCard.Footer>
        </MetroCard>
      </div>
    </div>
  );
};

export default ExampleCard;
