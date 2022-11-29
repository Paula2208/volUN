import './ModalSeePost.modules.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaCheck, FaBook, FaHeart, FaUsers, FaHands, FaLeaf, FaVolleyballBall, FaPaw, FaPaintBrush, FaCalendar, FaClock } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md";
import { BiX } from "react-icons/bi";
import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import { deleteOferta } from '../../api/offers';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { getDate } from '../../helpers/inputHelpers';
import { postReportsActive, postReportsPending, postReportsDenied } from '../../api/reports'
import { changeApply } from '../../api/auth';

export const categories = {
  "teach": "Teaching & Learning",
  "heart": "Heart & Wellness",
  "users": "Social Assistance",
  "hands": "Humanitarian Aid",
  "leaf": "Ambiental Help",
  "ball": "Sport Support",
  "paw": "Animals Care",
  "paint": "Make Culture",
}

function ModalSeePost(props) {

  const { show, handleClose, post, userType, setShowUpdatePost, reloadOffers, setCleanFilters, cleanFilters, applyPost } = props;

  /*const mockupReport = {
    post_id: 12,
    pending: [
      {
        firstname: "firstname",
        lastname: "lastname",
        username: "username",
        status: "PENDING"
      },
      {
        firstname: "firstname2",
        lastname: "lastname2",
        username: "username2",
        status: "PENDING"
      },
      {
        firstname: "firstname",
        lastname: "lastname",
        username: "username",
        status: "PENDING"
      },
      {
        firstname: "firstname2",
        lastname: "lastname2",
        username: "username2",
        status: "PENDING"
      },
      {
        firstname: "firstname",
        lastname: "lastname",
        username: "username",
        status: "PENDING"
      },
      {
        firstname: "firstname2",
        lastname: "lastname2",
        username: "username2",
        status: "PENDING"
      },
      {
        firstname: "firstname",
        lastname: "lastname",
        username: "username",
        status: "PENDING"
      },
      {
        firstname: "firstname2",
        lastname: "lastname2",
        username: "username2",
        status: "PENDING"
      }
    ],
    active: [
      {
        firstname: "firstname3",
        lastname: "lastname3",
        username: "username3",
        status: "ACTIVE"
      },
      {
        firstname: "firstname4",
        lastname: "lastname4",
        username: "username4",
        status: "ACTIVE"
      },
      {
        firstname: "firstname3",
        lastname: "lastname3",
        username: "username3",
        status: "ACTIVE"
      },
      {
        firstname: "firstname4",
        lastname: "lastname4",
        username: "username4",
        status: "ACTIVE"
      },
      {
        firstname: "firstname3",
        lastname: "lastname3",
        username: "username3",
        status: "ACTIVE"
      },
      {
        firstname: "firstname4",
        lastname: "lastname4",
        username: "username4",
        status: "ACTIVE"
      },
      {
        firstname: "firstname3",
        lastname: "lastname3",
        username: "username3",
        status: "ACTIVE"
      },
      {
        firstname: "firstname4",
        lastname: "lastname4",
        username: "username4",
        status: "ACTIVE"
      },
      {
        firstname: "firstname3",
        lastname: "lastname3",
        username: "username3",
        status: "ACTIVE"
      },
      {
        firstname: "firstname4",
        lastname: "lastname4",
        username: "username4",
        status: "ACTIVE"
      }
    ],
    denied: [
      {
        firstname: "firstname5",
        lastname: "lastname5",
        username: "username5",
        status: "DENIED"
      },
      {
        firstname: "firstname6",
        lastname: "lastname6",
        username: "username6",
        status: "DENIED"
      }
    ]
  }*/

  const [pending, setPending] = useState([]); //must be []
  const [active, setActive] = useState([]); //must be []
  const [denied, setDenied] = useState([]); //must be []

  const [loaddingReportActive, setLoaddingReportActive] = useState(false);
  const [loaddingReportPending, setLoaddingReportPending] = useState(false);

  const data = [
    { name: 'Accepted', value: active.length || 0 },
    { name: 'Pending', value: pending.length || 0 },
    { name: 'Denied', value: denied.length || 0 },
  ];

  const COLORS = ['#44D18D', '#FFF386', '#FF9A3D'];

  useEffect(() => {
    if (localStorage.getItem('userType') !== 'VOLUNTEER') {
      loadReports();
    }
  }, []);

  const loadReports = () => {
    setLoaddingReportActive(true);
    setLoaddingReportPending(true);

    postReportsActive(post.id)
      .then((results) => {
        setActive(results);
        setLoaddingReportActive(false);
      });

    postReportsPending(post.id)
      .then((results) => {
        setPending(results);
        setLoaddingReportPending(false);
      });

    postReportsDenied(post.id)
      .then((results) => {
        setDenied(results);
      });
  }

  const buttonText = () => {
    if (post.status === 'going' || post.status === 'active') {
      return "You're in!"
    }

    if (post.status === 'pending' || post.status === 'pendin') {
      return 'Pending'
    }

    return 'Apply'
  }

  const getCategory = () => {
    switch (post.category) {
      case "teach":
        return <div className={`ModalSeePost-category ${post.category}`}>
          <FaBook className={`ModalSeePost-category-icon`} />
          <span className={`ModalSeePost-category-title little`}>
            {categories[post.category]}
          </span>
        </div>
        break;
      case "heart":
        return <div className={`ModalSeePost-category ${post.category}`}>
          <FaHeart className={`ModalSeePost-category-icon`} />
          <span className={`ModalSeePost-category-title little`}>
            {categories[post.category]}
          </span>
        </div>
        break;
      case "users":
        return <div className={`ModalSeePost-category ${post.category}`}>
          <FaUsers className={`ModalSeePost-category-icon`} />
          <span className={`ModalSeePost-category-title little`}>
            {categories[post.category]}
          </span>
        </div>
        break;
      case "hands":
        return <div className={`ModalSeePost-category ${post.category}`}>
          <FaHands className={`ModalSeePost-category-icon`} />
          <span className={`ModalSeePost-category-title little`}>
            {categories[post.category]}
          </span>
        </div>
        break;
      case "leaf":
        return <div className={`ModalSeePost-category ${post.category}`}>
          <FaLeaf className={`ModalSeePost-category-icon`} />
          <span className={`ModalSeePost-category-title`}>
            {categories[post.category]}
          </span>
        </div>
        break;
      case "ball":
        return <div className={`ModalSeePost-category ${post.category}`}>
          <FaVolleyballBall className={`ModalSeePost-category-icon`} />
          <span className={`ModalSeePost-category-title`}>
            {categories[post.category]}
          </span>
        </div>
        break;
      case "paw":
        return <div className={`ModalSeePost-category ${post.category}`}>
          <FaPaw className={`ModalSeePost-category-icon`} />
          <span className={`ModalSeePost-category-title`}>
            {categories[post.category]}
          </span>
        </div>
        break;
      case "paint":
        return <div className={`ModalSeePost-category ${post.category}`}>
          <FaPaintBrush className={`ModalSeePost-category-icon`} />
          <span className={`ModalSeePost-category-title`}>
            {categories[post.category]}
          </span>
        </div>
        break;
      default:
        return <></>;
        break;
    }
  }

  const getPostImageGeneral = () => {
    switch (post.category) {
      case "teach":
        return "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=800"
        break;
      case "heart":
        return "https://images.pexels.com/photos/7475697/pexels-photo-7475697.jpeg?auto=compress&cs=tinysrgb&w=800"
        break;
      case "users":
        return "https://images.pexels.com/photos/7345449/pexels-photo-7345449.jpeg?auto=compress&cs=tinysrgb&w=800"
        break;
      case "hands":
        return "https://images.pexels.com/photos/6646989/pexels-photo-6646989.jpeg?auto=compress&cs=tinysrgb&w=800"
        break;
      case "leaf":
        return "https://images.pexels.com/photos/7656138/pexels-photo-7656138.jpeg?auto=compress&cs=tinysrgb&w=800"
        break;
      case "ball":
        return "https://images.pexels.com/photos/863977/pexels-photo-863977.jpeg?auto=compress&cs=tinysrgb&w=800"
        break;
      case "paw":
        return "https://images.pexels.com/photos/6131165/pexels-photo-6131165.jpeg?auto=compress&cs=tinysrgb&w=800"
        break;
      case "paint":
        return "https://images.pexels.com/photos/1507856/pexels-photo-1507856.jpeg?auto=compress&cs=tinysrgb&w=800"
        break;
      default:
        return "https://images.pexels.com/photos/5340269/pexels-photo-5340269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        break;
    }
  }

  const handleDelete = () => {
    deleteOferta(post.id)
      .then((results) => {
        if (results) {
          toast.success(`Post deleted.`)
          setCleanFilters(true);
          handleClose();
        }
        else {
          toast.error(`Error deleting post.`)
        }
      })
      .catch((err) => {
        toast.error(`Error deleting post.`);
        console.log(err);
      })
  }

  const handleUpdate = () => {
    setShowUpdatePost(true);
    handleClose();
  }

  const responseVolunteer = (username, accepted) => {
    changeApply(username, post.id, ((accepted) ? 'active' : 'denied'))
      .then((results) => {
        if (results) {
          toast.success('Response Saved!');
          loadReports();
        }
        else {
          toast.error('Error saving your response.');
        }
      })
  }

  return (
    <Modal show={show} onHide={handleClose} centered >
      <div className="ModalSeePost-row">
        <div className={`modal-color ${post.category}`}>
          <Modal.Header className="ModalSeePost-header">
            <img
              src={(post.image && post.image !== '') ? post.image : getPostImageGeneral()}
              className={`ModalSeePost-image ${post.category}`}
            />
            <div className={`ModalSeePost-category-container ${post.category}`}>
              {getCategory()}
            </div>
          </Modal.Header>
          <Modal.Body className="ModalSeePost-body">
            <h1>{post.title || ''}</h1>
            <h2>{post.nonProfitName || ''}</h2>
            <span>{post.description || ''}</span>
          </Modal.Body>
          <Modal.Footer className="ModalSeePost-footer">

            <div className="Post-information">
              <div className="Post-info-container">
                <FaCalendar className="Post-info-Icon" />
                <span>{getDate(post.date || '')}</span>
              </div>
              <div className="Post-info-container">
                <FaClock className="Post-info-Icon" />
                <span>{post.time || ''}</span>
              </div>
              <div className="Post-info-container">
                <MdLocationOn className="Post-info-Icon" />
                <span>{post.location || ''}</span>
              </div>
            </div>

            {(userType === 'VOLUNTEER') ? (
              <Button
                className={`ModalSeePost-Apply-btn ${((post.status === 'pendin') ? 'pending' : post.status) || ''}`}
                onClick={applyPost}
              >
                {buttonText()}
              </Button>
            ) : (
              <div className="ModalSeePost-btn">
                <Button
                  onClick={handleDelete}
                  className={`ModalSeePost-Admin-btn delete`}
                >
                  Delete
                </Button>
                <Button
                  onClick={handleUpdate}
                  className={`ModalSeePost-Admin-btn update`}
                >
                  Update
                </Button>
              </div>
            )}

          </Modal.Footer>
        </div>

        {(userType !== 'VOLUNTEER') && (
          <div className={`modal-color ${post.category} statistics`}>

            <div className='ModalSeePost-report-container'>
              <span className="ModalSeePost-Span">{`Pending ${pending.length || 0}`}</span>
              <div className="ModalSeePost-line pending" />

              <div className={`ModalSeePost-scroll ${userType} pending`}>
                {loaddingReportPending && (<div className='spinner lavanda'></div>)}
                {pending.map((p) => (
                  <div className="ModalSeePost-scroll-row pending" key={p.username}>
                    <span>{`${p.firstname || ''} ${p.lastname || ''}`}</span>
                    <button
                      className="ModalSeePost-pending-btn-yes pointer"
                      onClick={() => responseVolunteer(p.username, true)}
                    >
                      <FaCheck />
                    </button>
                    <button
                      className="ModalSeePost-pending-btn-no pointer"
                      onClick={() => responseVolunteer(p.username, false)}
                    >
                      <BiX />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className='ModalSeePost-report-container'>
              <span className="ModalSeePost-Span">{`Volunteers ${active.length || 0}`}</span>
              <div className="ModalSeePost-line active" />

              <div className={`ModalSeePost-scroll ${userType} active`}>
                {loaddingReportActive && (<div className='spinner lavanda'></div>)}
                {active.map((p) => (
                  <div className="ModalSeePost-scroll-row active" key={p.username}>
                    <span>{`${p.firstname || ''} ${p.lastname || ''}`}</span>
                  </div>
                ))}
              </div>
            </div>

            {(userType === 'ADMIN') && (
              <div className='ModalSeePost-report-container'>
                <span className="ModalSeePost-Span">Offer Statistics</span>
                <div className="ModalSeePost-line statistics" />

                <div className="ModalSeePost-Graphics">
                  <div className="ModalSeePost-Chart-data">
                    <div className="ModalSeePost-Chart-name">
                      <div className="ModalSeePost-Chart-line accepted" />
                      <span>Volunteers Accepted</span>
                    </div>

                    <div className="ModalSeePost-Chart-name">
                      <div className="ModalSeePost-Chart-line pending" />
                      <span>Volunteers Pending</span>
                    </div>

                    <div className="ModalSeePost-Chart-name">
                      <div className="ModalSeePost-Chart-line denied" />
                      <span>Volunteers Denied</span>
                    </div>

                  </div>

                  <div className="ModalSeePost-Pie">
                    <PieChart width={800} height={400}>
                      <Pie
                        data={data}
                        cx={100}
                        cy={100}
                        innerRadius={45}
                        outerRadius={60}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>
                </div>

              </div>
            )}

          </div>
        )}
      </div>

    </Modal>
  );
}

export default ModalSeePost;
