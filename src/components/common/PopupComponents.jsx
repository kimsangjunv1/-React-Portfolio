import React, { useState } from "react";

const PopupComponents = ({ desc }) => {
	const [visible, setVisible] = useState(false);
	return (
		<div className={`popup ${visible && "hide"}`}>
			<div className="popup_inner">
				<h2>알림</h2>
				<p>{desc}</p>
				<div className="function_container">
					<a href="https://portfolio-sprout.netlify.app/">이동</a>
					<button
						onClick={() => {
							setVisible(true);
						}}
					>
						닫기
					</button>
				</div>
			</div>
		</div>
	);
};

export default PopupComponents;
