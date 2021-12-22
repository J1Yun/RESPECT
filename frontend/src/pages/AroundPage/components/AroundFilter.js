import React, { useState, useEffect } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';
import 'pages/AroundPage/styles/AroundFilter.css';
const categories = [
  {
    id: 1,
    contents: '서버/백엔드',
  },
  {
    id: 2,
    contents: '프론트엔드',
  },
  {
    id: 3,
    contents: '웹 풀스택',
  },
  {
    id: 4,
    contents: '안드로이드 앱',
  },
  {
    id: 5,
    contents: '아이폰 앱',
  },
  {
    id: 6,
    contents: '머신러닝',
  },
  {
    id: 7,
    contents: '인공지능(AI)',
  },
  {
    id: 8,
    contents: '데이터 엔지니어',
  },
  {
    id: 9,
    contents: '모바일 게임',
  },
  {
    id: 10,
    contents: '게임 클라이언트',
  },
  {
    id: 11,
    contents: '게임 서버',
  },
  {
    id: 12,
    contents: '시스템/네트워크',
  },
  {
    id: 13,
    contents: '시스템 소프트웨어',
  },
  {
    id: 14,
    contents: '인터넷 보안',
  },
  {
    id: 15,
    contents: '임베디드 소프트웨어',
  },
  {
    id: 16,
    contents: '로보틱스 미들웨어',
  },
  {
    id: 17,
    contents: 'QA',
  },
  {
    id: 18,
    contents: '사물인터넷(IoT)',
  },
  {
    id: 19,
    contents: '응용 프로그램',
  },
  {
    id: 20,
    contents: '블록체인',
  },
];

const AroundFilter = () => {
  const [New, setNew] = useState(true);
  const [Experienced, setExperienced] = useState(true);
  const [category, setCategory] = useState(false);
  const [select, setSelect] = useState(new Set());
  const [respect, setRespect] = useState(true);
  const [project, setProject] = useState(false);
  useEffect(() => {
    for (let i = 1; i <= 20; i++) {
      select.add(i);
      setSelect(select);
    }
  }, []);
  const onNewClick = () => {
    setNew((prev) => !prev);
  };
  const onExperiencedClick = () => {
    setExperienced((prev) => !prev);
  };
  const onCategoryClick = () => {
    setCategory((prev) => !prev);
  };
  const onCheckChange = (e) => {
    const t = e.target;
    if (t.checked) {
      select.add(parseInt(t.value));
      setSelect(select);
    } else if (!t.checked && select.has(parseInt(t.value))) {
      select.delete(parseInt(t.value));
      setSelect(select);
    }
  };
  const onCheckAll = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((box) => (box.checked = true));
    for (let i = 1; i <= 20; i++) {
      if (!select.has(i)) {
        select.add(i);
      }
    }
    setSelect(select);
    console.log(select);
  };
  const onUncheckAll = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    console.log(checkboxes);
    checkboxes.forEach((box) => (box.checked = false));
    for (let i = 1; i <= 20; i++) {
      if (select.has(i)) {
        select.delete(i);
      }
    }
    setSelect(select);
  };
  const onRespectClick = () => {
    setRespect((prev) => !prev);
    setProject((prev) => !prev);
  };
  const onProjectClick = () => {
    setProject((prev) => !prev);
    setRespect((prev) => !prev);
  };
  return (
    <div className="filter-container">
      <div>Filter</div>
      <div>
        <span className="filter-check" onClick={onNewClick}>
          <span>{New ? <MdCheckBox color="#0275b1" size="19" /> : <MdCheckBoxOutlineBlank color="#0275b1" size="19" />}</span>
          <span>우리 학교만</span>
        </span>
        <span className="filter-check" onClick={onExperiencedClick}>
          <span>{Experienced ? <MdCheckBox color="#0275b1" size="19" /> : <MdCheckBoxOutlineBlank color="#0275b1" size="19" />}</span>
          <span>취업자만</span>
        </span>
        <span className="filter-sort">
          <span>정렬기준</span>
          <span onClick={onRespectClick}>
            {respect ? (
              <button className="filter-sort-respect-click">리스펙</button>
            ) : (
              <button className="filter-sort-respect">리스펙</button>
            )}
          </span>
          <span onClick={onProjectClick}>
            {project ? (
              <button className="filter-sort-project-click">프로젝트 수</button>
            ) : (
              <button className="filter-sort-project">프로젝트 수</button>
            )}
          </span>
        </span>
      </div>
      <div className="filter-dropdown-container">
        <div className="filter-dropdown" onClick={onCategoryClick}>
          <span>직무</span>
          <span>
            <IoMdArrowDropdown />
          </span>
        </div>

        {category ? (
          <div className="filter-dropdown-field">
            <button className="filter-dropdown-all" onClick={onCheckAll}>
              전체선택
            </button>
            <button className="filter-dropdown-all" onClick={onUncheckAll}>
              전체해제
            </button>

            <ul>
              {categories.map((item) => (
                <li>
                  <label>
                    <input onChange={onCheckChange} type="checkbox" value={item.id} defaultChecked="true" />
                    {item.contents}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AroundFilter;
