import Head from "next/head"
import Image from "next/image"
import Footer from "../comps/Footer"
import Navbar from "../comps/Navbar"
import styles from "../styles/Home.module.css"
import Link from "next/link"

export default function Home() {
	return (
		<div>
			<h1>Homepage</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perferendis quae obcaecati molestiae nam eligendi facilis aperiam at aliquid qui sit cumque vero non laborum iure,
				consequatur voluptatum veritatis totam!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perferendis quae obcaecati molestiae nam eligendi facilis aperiam at aliquid qui sit cumque vero non laborum iure,
				consequatur voluptatum veritatis totam!
			</p>
			<Link href='/ninjas'>
				<a>See Ninja Listing</a>
			</Link>
		</div>
	)
}
