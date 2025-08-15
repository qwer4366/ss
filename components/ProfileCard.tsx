import React from "react";
import profileImg from "./تصميم بدون عنوان.png";

const ProfileCard: React.FC = () => {
	return (
		<div style={{
			width: 360,
			padding: 24,
			borderRadius: 18,
			background: 'rgba(0,0,0,0.6)',
			color: 'white',
			boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		}}>
			<div style={{
				marginTop: 4,
				marginBottom: 18,
				display: 'flex',
				justifyContent: 'center',
				width: '100%'
			}}>
				<div style={{
					width: 120,
					height: 120,
					borderRadius: '50%',
					overflow: 'hidden',
					boxShadow: '0 8px 24px rgba(0,0,0,0.7) inset',
					border: '3px solid rgba(255,255,255,0.06)',
					background: '#222',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<img
						src={profileImg}
						alt="profile"
						style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
					/>
				</div>
			</div>

			<h2 style={{ margin: 0, fontSize: 28 }}>Mu3</h2>
			<p style={{ margin: '6px 0 18px', opacity: 0.9 }}>_IQ Developer</p>
			<p style={{ margin: 0, fontSize: 14, textAlign: 'center', opacity: 0.85 }}>
				Building digital solutions, exploring energy frontiers
			</p>
		</div>
	);
};

export default ProfileCard;
