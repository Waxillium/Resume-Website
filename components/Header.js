import Link from 'next/link';
import Router from 'next/router';
import React from 'react';

class Header extends React.Component{
	render(){
		return(
			<div>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/about">
					<a>More About Me</a>
				</Link>
				<Link href="/portfolio">
					<a>Portfolio</a>
				</Link>
				<style jsx>{`
					div{
						text-align: center;
					}
					a{
						padding: 15px;
					}
				`}</style>
			</div>
		);
	}
}

export default Header;