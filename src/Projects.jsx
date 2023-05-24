import React, { useEffect, useRef } from 'react';

export const Projects = () => {
    const book = useRef([]);
//bk-viewinside

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
    <div className=' w-[60rem] m-3  overflow-auto bg-slate-800/[.09] h-4/5 fixed rounded-3xl'>
        <div className='w-full grid  p-10'>
        <div class="container">
	<div class="main">
		<ul id="bk-list" class="bk-list clearfix">
			<li>
				<div ref={(element) => {book.current[0] = element}}  class="bk-book book-1 bk-bookdefault">
					<div class="bk-front ">
						<div class="bk-cover-back "></div>
						<div class="bk-cover ">
							<h2>
										<span>Anthony Burghiss</span>
										<span>A Catwork Orange</span>
									</h2>
						</div>
					</div>
					<div class="bk-page ">
						<div class="bk-content bk-content-current">
							<p>Red snapper Kafue pike fangtooth humums slipmouth, salmon cutlassfish; swallower European perch mola mola sunfish, threadfin bream. Billfish hog sucker trout-perch lenok orbicular velvetfish. Delta smelt striped bass, medusafish dragon goby starry
								flounder cuchia round whitefish northern anchovy spadefish merluccid hake cat shark Black pickerel. Pacific cod.</p>
						</div>
						<div class="bk-content">
							<p>Whale catfish leatherjacket deep sea anglerfish grenadier sawfish pompano dolphinfish carp large-eye bream, squeaker amago. Sandroller; rough scad, tiger shovelnose catfish snubnose parasitic eel? Black bass soldierfish duckbill--Rattail Atlantic
								saury Blind shark California halibut; false trevally warty angler!</p>
						</div>
						<div class="bk-content">
							<p>Trahira giant wels cutlassfish snapper koi blackchin mummichog mustard eel rock bass whiff murray cod. Bigmouth buffalo ling cod giant wels, sauger pink salmon. Clingfish luderick treefish flatfish Cherubfish oldwife Indian mul gizzard shad hagfish
								zebra danio. Butterfly ray lizardfish ponyfish muskellunge Long-finned sand diver mullet swordfish limia ghost carp filefish.</p>
						</div>
						<nav><span class="bk-page-prev">&lt;</span><span class="bk-page-next">&gt;</span></nav>
					</div>
					<div class="bk-back">
						<p>In this nightmare vision of cats in revolt, fifteen-year-old Alex and his friends set out on a diabolical orgy of robbery, rape, torture and murder. Alex is jailed for his teenage delinquency and the State tries to reform him - but at what cost?</p>
					</div>
					<div class="bk-right"></div>
					<div class="bk-left">
						<h2>
									<span>Anthony Burghiss</span>
									<span>A Catwork Orange</span>
								</h2>
					</div>
					<div class="bk-top"></div>
					<div class="bk-bottom"></div>
				</div>
				<div class="bk-info">
					<button onClick={() => flip(0)} class="bk-bookback">Flip</button>
					<button onClick={() => open(0)} class="bk-bookview">View inside</button>
					<h3>
								<span>Anthony Burghiss</span>
								<span>A Catwork Orange</span>
							</h3>
					<p>Social prophecy? Black comedy? Study of freewill? A Clockwork Orange is all of these. It is also a dazzling experiment in language, as Burghiss creates a new language - 'meow', the cat slang of a not-too-distant future.</p>
				</div>
			</li>
			<li>
				<div ref={(element) => {book.current[1] = element}}  class="bk-book book-2 bk-bookdefault">
					<div class="bk-front">
						<div class="bk-cover-back"></div>
						<div class="bk-cover">
							<h2>
										<span>The Catfather</span>
										<span>Mario Purrzo</span>
									</h2>
						</div>
					</div>
					<div class="bk-page">
						<div class="bk-content">
							<p>Whale catfish leatherjacket deep sea anglerfish grenadier sawfish pompano dolphinfish carp large-eye bream, squeaker amago. Sandroller; rough scad, tiger shovelnose catfish snubnose parasitic eel? Black bass soldierfish duckbill--Rattail Atlantic
								saury Blind shark California halibut; false trevally warty angler!</p>
						</div>
						<div class="bk-content">
							<p>Trahira giant wels cutlassfish snapper koi blackchin mummichog mustard eel rock bass whiff murray cod. Bigmouth buffalo ling cod giant wels, sauger pink salmon. Clingfish luderick treefish flatfish Cherubfish oldwife Indian mul gizzard shad hagfish
								zebra danio. Butterfly ray lizardfish ponyfish muskellunge Long-finned sand diver mullet swordfish limia ghost carp filefish.</p>
						</div>
						<div class="bk-content bk-content-current">
							<p>Red snapper Kafue pike fangtooth humums's slipmouth, salmon cutlassfish; swallower European perch mola mola sunfish, threadfin bream. Billfish hog sucker trout-perch lenok orbicular velvetfish. Delta smelt striped bass, medusafish dragon goby starry
								flounder cuchia round whitefish northern anchovy spadefish merluccid hake cat shark Black pickerel. Pacific cod.</p>
						</div>
						<nav><span class="bk-page-prev">&lt;</span><span class="bk-page-next">&gt;</span></nav>
					</div>
					<div class="bk-back">
						<p>Tyrant, blackmailer, racketeer, murderer - his influence reaches every level of American society. Meet Cat Corleone, a friendly cat, a just cat, a reasonable cat. The deadliest lord of the Cata Nostra. The Catfather.</p>
					</div>
					<div class="bk-right"></div>
					<div class="bk-left">
						<h2>
									<span>The Catfather</span>
									<span>by Mario Purrzo</span>
								</h2>
					</div>
					<div class="bk-top"></div>
					<div class="bk-bottom"></div>
				</div>
				<div class="bk-info">
					<button onClick={() => flip(1)} class="bk-bookback">Flip</button>
					<button onClick={() => open(1)} class="bk-bookview">View inside</button>
					<h3>
								<span>Mario Purrzo</span>
								<span>The Catfather</span>
							</h3>
					<p>A modern masterpiece,The Godfather is a searing portrayal of the 1940s criminal underworld. It is also the intimate story of the Corleone family, at once drawn together and ripped apart by its unique position at the core of the American Mafia. </p>
				</div>
			</li>
			<li>
				<div ref={(element) => {book.current[2] = element}}  class="bk-book book-3 bk-bookdefault">
					<div class="bk-front">
						<div class="bk-cover-back"></div>
						<div class="bk-cover">
							<h2>
										<span>J.C. Salinger</span>
										<span>The Catcher in the Rye</span>
									</h2>
						</div>
					</div>
					<div class="bk-page">
						<div class="bk-content bk-content-current">
							<p>Oceanic flyingfish spotted danio fingerfish leaffish, Billfish halibut Atlantic cod threadsail poacher slender mola. Swallower muskellunge, turbot needlefish yellow perch trout dhufish dwarf gourami false moray southern smelt cod dwarf gourami.
								Betta blue catfish bottlenose electric ray sablefish.</p>
						</div>
						<div class="bk-content">
							<p>Whale catfish leatherjacket deep sea anglerfish grenadier sawfish pompano dolphinfish carp large-eye bream, squeaker amago. Sandroller; rough scad, tiger shovelnose catfish snubnose parasitic eel? Black bass soldierfish duckbill--Rattail Atlantic
								saury Blind shark California halibut; false trevally warty angler!</p>
						</div>
						<div class="bk-content">
							<p>Trahira giant wels cutlassfish snapper koi blackchin mummichog mustard eel rock bass whiff murray cod. Bigmouth buffalo ling cod giant wels, sauger pink salmon. Clingfish luderick treefish flatfish Cherubfish oldwife Indian mul gizzard shad hagfish
								zebra danio. Butterfly ray lizardfish ponyfish muskellunge Long-finned sand diver mullet swordfish limia ghost carp filefish.</p>
						</div>
						<nav><span class="bk-page-prev">&lt;</span><span class="bk-page-next">&gt;</span></nav>
					</div>
					<div class="bk-back">
						<img src="https://tympanus.net/Development/3DBookShowcase/images/3.png" alt="cat"/>
						<p>Holden Catfield is a seventeen-year-old dropout who has just been kicked out of his fourth school. Navigating his way through the challenges of growing up, Holden dissects the 'phony' aspects of society.</p>
					</div>
					<div class="bk-right"></div>
					<div class="bk-left">
						<h2>
									<span>J.C. Salinger</span>
									<span>The Catcher in the Rye</span>
								</h2>
					</div>
					<div class="bk-top"></div>
					<div class="bk-bottom"></div>
				</div>
				<div class="bk-info">
					<button  onClick={() => flip(2)} class="bk-bookback">Flip</button>
					<button class="bk-bookview">View inside</button>
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
