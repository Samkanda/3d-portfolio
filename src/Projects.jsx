import React, { useEffect, useRef } from 'react';

export const Projects = () => {
	//Ref
    const book = useRef([]);
	//Book Functions
    const flip = (e) => {
        if(book.current[e].classList.contains("bk-viewback")){
            book.current[e].classList.remove('bk-viewback')
        }
        else{
            book.current[e].classList.add("bk-viewback");
        }
    }

    const open = (e) => {
        if(book.current[e].classList.contains("bk-viewinside")){
            book.current[e].classList.remove('bk-viewinside')
        }
        else{
            book.current[e].classList.add("bk-viewinside");
        }
    }



  return (
    <div className=' w-[50rem] m-3  overflow-auto bg-[#F7F0E1]/[.90] h-4/5 fixed rounded-3xl'>
    <div className='w-full p-10'>
    <div className="container">
	<div className="main">
		<ul id="bk-list" className="bk-list clearfix">
			<li>
				<div ref={(element) => {book.current[0] = element}}  className="demoPage bk-book book-1 bk-bookdefault">
					<div className="bk-front ">
						<div className="bk-cover-back "></div>
						<div className="bk-cover ">
							<h2>
								<span>Anthony Burghiss</span>
								<span>A Catwork Orange</span>
							</h2>
						</div>
					</div>
					<div className="bk-page ">
						<div className="bk-content bk-content-current">
							<p>Red snapper Kafue pike fangtooth humums slipmouth, salmon cutlassfish; swallower European perch mola mola sunfish, threadfin bream. Billfish hog sucker trout-perch lenok orbicular velvetfish. Delta smelt striped bass, medusafish dragon goby starry
								flounder cuchia round whitefish northern anchovy spadefish merluccid hake cat shark Black pickerel. Pacific cod.</p>
						</div>
						<div className="bk-content">
							<p>Whale catfish leatherjacket deep sea anglerfish grenadier sawfish pompano dolphinfish carp large-eye bream, squeaker amago. Sandroller; rough scad, tiger shovelnose catfish snubnose parasitic eel? Black bass soldierfish duckbill--Rattail Atlantic
								saury Blind shark California halibut; false trevally warty angler!</p>
						</div>
						<div className="bk-content">
							<p>Trahira giant wels cutlassfish snapper koi blackchin mummichog mustard eel rock bass whiff murray cod. Bigmouth buffalo ling cod giant wels, sauger pink salmon. Clingfish luderick treefish flatfish Cherubfish oldwife Indian mul gizzard shad hagfish
								zebra danio. Butterfly ray lizardfish ponyfish muskellunge Long-finned sand diver mullet swordfish limia ghost carp filefish.</p>
						</div>
						<nav><span className="bk-page-prev">&lt;</span><span className="bk-page-next">&gt;</span></nav>
					</div>
					<div className="bk-back">
						<p>In this nightmare vision of cats in revolt, fifteen-year-old Alex and his friends set out on a diabolical orgy of robbery, rape, torture and murder. Alex is jailed for his teenage delinquency and the State tries to reform him - but at what cost?</p>
					</div>
					<div className="bk-right"></div>
					<div className="bk-left">
						<h2>
							<span>Anthony Burghiss</span>
							<span>A Catwork Orange</span>
						</h2>
					</div>
					<div className="bk-top"></div>
					<div className="bk-bottom"></div>
				</div>
				<div className="bk-info">
					<button onClick={() => flip(0)} className="bk-bookback">Flip</button>
					<button onClick={() => open(0)} className="bk-bookview">View inside</button>
					<h3>
						<span>Anthony Burghiss</span>
						<span>A Catwork Orange</span>
					</h3>
					<p>Social prophecy? Black comedy? Study of freewill? A Clockwork Orange is all of these. It is also a dazzling experiment in language, as Burghiss creates a new language - 'meow', the cat slang of a not-too-distant future.</p>
				</div>
			</li>
			<li>
				<div ref={(element) => {book.current[1] = element}}  className="demoPage bk-book book-2 bk-bookdefault">
					<div className="bk-front">
						<div className="bk-cover-back"></div>
						<div className="bk-cover">
							<h2>
								<span>The Catfather</span>
								<span>Mario Purrzo</span>
							</h2>
						</div>
					</div>
					<div className="bk-page">
						<div className="bk-content">
							<p>Whale catfish leatherjacket deep sea anglerfish grenadier sawfish pompano dolphinfish carp large-eye bream, squeaker amago. Sandroller; rough scad, tiger shovelnose catfish snubnose parasitic eel? Black bass soldierfish duckbill--Rattail Atlantic
								saury Blind shark California halibut; false trevally warty angler!</p>
						</div>
						<div className="bk-content">
							<p>Trahira giant wels cutlassfish snapper koi blackchin mummichog mustard eel rock bass whiff murray cod. Bigmouth buffalo ling cod giant wels, sauger pink salmon. Clingfish luderick treefish flatfish Cherubfish oldwife Indian mul gizzard shad hagfish
								zebra danio. Butterfly ray lizardfish ponyfish muskellunge Long-finned sand diver mullet swordfish limia ghost carp filefish.</p>
						</div>
						<div className="bk-content bk-content-current">
							<p>Red snapper Kafue pike fangtooth humums's slipmouth, salmon cutlassfish; swallower European perch mola mola sunfish, threadfin bream. Billfish hog sucker trout-perch lenok orbicular velvetfish. Delta smelt striped bass, medusafish dragon goby starry
								flounder cuchia round whitefish northern anchovy spadefish merluccid hake cat shark Black pickerel. Pacific cod.</p>
						</div>
						<nav><span className="bk-page-prev">&lt;</span><span className="bk-page-next">&gt;</span></nav>
					</div>
					<div className="bk-back">
						<p>Tyrant, blackmailer, racketeer, murderer - his influence reaches every level of American society. Meet Cat Corleone, a friendly cat, a just cat, a reasonable cat. The deadliest lord of the Cata Nostra. The Catfather.</p>
					</div>
					<div className="bk-right"></div>
					<div className="bk-left">
						<h2>
							<span>The Catfather</span>
							<span>by Mario Purrzo</span>
						</h2>
					</div>
					<div className="bk-top"></div>
					<div className="bk-bottom"></div>
				</div>
				<div className="bk-info">
					<button onClick={() => flip(1)} className="bk-bookback">Flip</button>
					<button onClick={() => open(1)} className="bk-bookview">View inside</button>
					<h3>
						<span>Mario Purrzo</span>
						<span>The Catfather</span>
					</h3>
					<p>A modern masterpiece,The Godfather is a searing portrayal of the 1940s criminal underworld. It is also the intimate story of the Corleone family, at once drawn together and ripped apart by its unique position at the core of the American Mafia. </p>
				</div>
			</li>
			<li>
				<div ref={(element) => {book.current[2] = element}}  className="bk-book book-3 bk-bookdefault">
					<div className="bk-front">
						<div className="bk-cover-back"></div>
						<div className="bk-cover">
							<h2>
								<span>J.C. Salinger</span>
								<span>The Catcher in the Rye</span>
							</h2>
						</div>
					</div>
					<div className="bk-page">
						<div className="bk-content bk-content-current">
							<p>Oceanic flyingfish spotted danio fingerfish leaffish, Billfish halibut Atlantic cod threadsail poacher slender mola. Swallower muskellunge, turbot needlefish yellow perch trout dhufish dwarf gourami false moray southern smelt cod dwarf gourami.
								Betta blue catfish bottlenose electric ray sablefish.</p>
						</div>
						<div className="bk-content">
							<p>Whale catfish leatherjacket deep sea anglerfish grenadier sawfish pompano dolphinfish carp large-eye bream, squeaker amago. Sandroller; rough scad, tiger shovelnose catfish snubnose parasitic eel? Black bass soldierfish duckbill--Rattail Atlantic
								saury Blind shark California halibut; false trevally warty angler!</p>
						</div>
						<div className="bk-content">
							<p>Trahira giant wels cutlassfish snapper koi blackchin mummichog mustard eel rock bass whiff murray cod. Bigmouth buffalo ling cod giant wels, sauger pink salmon. Clingfish luderick treefish flatfish Cherubfish oldwife Indian mul gizzard shad hagfish
								zebra danio. Butterfly ray lizardfish ponyfish muskellunge Long-finned sand diver mullet swordfish limia ghost carp filefish.</p>
						</div>
						<nav><span className="bk-page-prev">&lt;</span><span className="bk-page-next">&gt;</span></nav>
					</div>
					<div className="bk-back">
						<img src="https://tympanus.net/Development/3DBookShowcase/images/3.png" alt="cat"/>
						<p>Holden Catfield is a seventeen-year-old dropout who has just been kicked out of his fourth school. Navigating his way through the challenges of growing up, Holden dissects the 'phony' aspects of society.</p>
					</div>
					<div className="bk-right"></div>
					<div className="bk-left">
						<h2>
							<span>J.C. Salinger</span>
							<span>The Catcher in the Rye</span>
						</h2>
					</div>
					<div className="bk-top"></div>
					<div className="bk-bottom"></div>
				</div>
				<div className="bk-info">
					<button  onClick={() => flip(2)} className="bk-bookback">Flip</button>
					<button className="bk-bookview">View inside</button>
					<h3>
						<span>J.C. Salinger</span>
						<span>The Catcher in the Rye</span>
					</h3>
					<p>Originally published for adults, this novel has since become popular with adolescent readers for its themes of cat confusion, angst, alienation, and rebellion.</p>
				</div>
			</li>
		</ul>
	</div>
	</div>
    </div>
    </div>
  )
}
