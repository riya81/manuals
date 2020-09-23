import PropTypes from "prop-types"
import React from "react";
import { jQuery, $ } from './function/jQuery/FCC-jQuery-Module';
import Sciences from './components/Search/Search'
import ModalSimple from "./components/Modal/simples/Modal_simple";
import * as Beta from './function/β/PSC'
import Time from './function/time/Time'
import Window from './function/window/Window'
import * as UTF from './function/utf/UTF'
class Search extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {}
	}
	render()
	{
		return (
			<Sciences
				numOrtext={this.props.numOrtext}
			/>
		);
	}
}
class Modal_simple extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {}
	}
	render()
	{
		let blake = () => { }
		if (this.props.blake != null)
		{
			blake = this.props.blake
		}
		return (
			<React.Fragment>
				<div className={`modal ${this.props.Class}`}>
					<ModalSimple
						title={this.props.h2}
						text={this.props.text}
						text2={this.props.text2}
						blake={blake}
					/>
				</div>
			</React.Fragment>
		);
	}
}
class Aimg extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {}
	}
	render()
	{
		return (
			<div>
				<a
					href={this.props.url}
				>
					<img
						src={this.props.imgurl}
						alt=""
					/>
				</a>
			</div>
		);
	}
}
class Accordion extends React.Component
{
	render()
	{
		return (
			<div>
				<ul className="accordion-tabs-minimal">
					<li className="tab-header-and-content">
						<a href="#" className="tab-link is-active">{this.props.title1}</a>
						<div className="tab-content" id="1">
							<p className="text-p-accordion" id="accordiontab-1">{this.props.text1}</p>
						</div>
					</li>
					<li className="tab-header-and-content">
						<a href="#" className="tab-link">{this.props.title2}</a>
						<div className="tab-content" id="2">
							<p className="text-p-accordion" id="accordiontab-2">{this.props.text2}</p>
						</div>
					</li>
					<li className="tab-header-and-content">
						<a href="#" className="tab-link">{this.props.title3}</a>
						<div className="tab-content" id="3">
							<p className="text-p-accordion" id="accordiontab-3">{this.props.text3}</p>
						</div>
					</li>
					<li className="tab-header-and-content">
						<a href="#" className="tab-link">{this.props.title4}</a>
						<div className="tab-content" id="4">
							<p className="text-p-accordion" id="accordiontab-4">{this.props.text4}</p>
						</div>
					</li>
				</ul>
			</div>
		)
	}
}
class Thedetails extends React.Component
{
	render()
	{
		return (
			<div>
				<p>Producer: {this.props.producer}</p>
				<p>Programming languages: {this.props.programming}</p>
			</div>
		)
	}
}
class Button extends React.Component
{
	render()
	{
		return (
			<input type="button" value={this.props.text} id={this.props.id} className={this.props.class}></input>
		);
	}
}
class Sns extends React.Component
{
	render()
	{
		return (
			<div className="btn-sns">
				<a href={this.props.url} className={this.props.classs} btn-hover>
					<span className={this.props.span}>
						<i className={this.props.i}></i>
					</span>Follow Me</a>
			</div>
		)
	}
}
class Text extends React.Component
{
	render()
	{
		return (
			<input type="text" class={this.props.classs} id={this.props.id}></input>
		)
	}
}
class maths
{
	constructor()
	{
		this.random = (num) =>
		{
			Number(num);
			let test = Math.floor(Math.random() * num);
			return test;
		}
		this.sqrt = (n) =>
		{
			Number(n);
			//平方根
			let sqrts = Math.sqrt(n);
			return sqrts;
		}
		this.repetition = (x) =>
		{
			Number(x);
			//階乗
			let age = 1;
			for (let i = 2; i <= x; i++)
			{
				age *= i;
			}
			return age;
		}
		this.ncr = (n, r) =>
		{
			Number(n);
			Number(r);
			//nCr
			let x;
			let z;
			let y;
			let age = 1;
			y = n;
			z = r;
			x = 0;
			while (x == 0)
			{
				if (r == 1)
				{
					y = y * r;
				}
				r--;
				if (r == 0)
				{
					x++;
				} else
				{
					n--;
					if (n == 0)
					{
						x++;
						break;
					}
					y = y * n;
				}
			}
			for (let i = 2; i <= z; i++)
			{
				age *= i;
			}
			y = y / age;
			return y;
		}
		this.ncrs = (n, r) =>
		{
			Number(n);
			Number(r);
			//重複を許して取り出す
			n = n + r - 1;
			n = Maths.ncr(n, r);
			return n;
		}
		this.gcd = (f, x) =>
		{
			Number(f);
			Number(x);
			//最大公約数
			let r, tmp;
			if (f < x)
			{
				tmp = f;
				f = x;
				x = tmp;
			}
			/* ユークリッドの互除法 */
			r = f % x;
			while (r != 0)
			{
				f = x;
				x = r;
				r = f % x;
			}
			return x;
		}
		this.npr = (n = 1, r = 1) =>
		{
			Number(n);
			Number(r);
			//nPr
			let y;
			let x = 0;
			y = n;
			while (x == 0)
			{
				if (r == 1)
				{
					y = y * r;
				}
				r--;
				if (r == 0)
				{
					x++;
				} else
				{
					n--;
					if (n == 0)
					{
						x++;
						break;
					}
					y = y * n;
				}
			}
			return y;
		}
		this.ratio = (a, b, x, y) =>
		{
			Number(a);
			Number(b);
			Number(x);
			Number(y);
			//比率
			a *= y;
			b *= x;
			if (a < b)
			{
				if ((b % a) == 0)
				{
					return b / a;
				} else
				{
					return `${a}/${b}`;
				}
			} else
			{
				if ((a % b) == 0)
				{
					return a / b;
				} else
				{
					return `${b}/${a}`;
				}
			}
		}
		this.diagonal = (n) =>
		{
			Number(n);
			//対角線の数
			n = (n * (n - 3)) / 2;
			return n;
		}
		this.pow = (num, n) =>
		{
			Number(num);
			Number(n);
			//xのy乗
			let nums = num;
			for (let i = 2; i <= n; i++)
			{
				nums *= num;
			}
			return nums;
		}
		this.cone = (num1, num2) =>
		{
			Number(num1);
			Number(num2);
			num1 *= num1;
			num2 *= num1;
			if (num2 % 3 == 0)
			{
				return num2 / 3;
			} else
			{
				return `${num2}/3`;
			}
		}
		this.pMultiplicative = (a, b) =>
		{
			Number(a);
			Number(b);
			a = `${a * a}+${2 * a * b}+${b * b}`;
			return a;
		}
		this.rpMultiplicative = (a, b) =>
		{
			Number(a);
			Number(b);
			a = `(${Math.sqrt(a)}+${Math.sqrt(b)})^2`;
			return a;
		}
		this.mMultiplicative = (a, b) =>
		{
			Number(a);
			Number(b);
			a = `${a * a}-${2 * a * b}+${b * b}`;
			return a;
		}
		this.rmMultiplicative = (a, b) =>
		{
			Number(a);
			Number(b);
			a = `(${Math.sqrt(a)}-${Math.sqrt(b)})^2`;
			return a;
		}
		this.pmMultiplicative = (a, b) =>
		{
			Number(a);
			Number(b);
			a = `${a * a}-${b * b}`;
			return a;
		}
		this.rpmMultiplicative = (a, b) =>
		{
			Number(a);
			Number(b);
			a = `(${Math.sqrt(a)}+${Math.sqrt(b)})(${Math.sqrt(a)}-${Math.sqrt(b)})`;
			return a;
		}
		this.Pythagorean = (a, b) =>
		{
			Number(a);
			Number(b);
			a = a * a + b * b;
			return a;
		}
		this.rPythagorean = (a, b) =>
		{
			Number(a);
			Number(b);
			a = a * a - b * b;
			return a;
		}
		this.Binarynumber = (num) =>
		{
			Number(num);
			num = num.length
			for (let i = 1; i < num; i++)
			{
				num = num
				console.log(num)
			}
			return num;
		}
		this.k = (num) =>
		{
			Number(num)
			num += 273
			return num
		}
		/*this.Tem = (c) => {
			let k = c + 273.15;
			let f = 1.8 * c + 32;
			let r = 1.8 * k;
			const tet = `ケルビン: ${k} 摂氏度: ${c} 華氏度: ${f} ランキン度: ${r}`;
			return (k, c, f, r);
		}*/
	}
}
class css
{
	constructor()
	{
		this.Colorid = (id, color) =>
		{
			let Htmlcolor = document.getElementById(id)
			Htmlcolor.style.color = color
		}
		this.Colorclass = (classs, color) =>
		{
			let Htmlcolor = document.getElementsByClassName(classs)
			Htmlcolor.style.color = color
		}
	}
}
class CSS extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {}
	}
	render()
	{
		return (
			<React.Fragment>
				{this.props.component.map((component) =>
				{
					return (
						<React.Fragment key={component.key}>
							<div>
								<div>
									<p>{component.title}</p>
								</div>
								<div>
									<img src={component.url} alt="" />
								</div>
							</div>
						</React.Fragment>
					)
				})}
			</React.Fragment>
		);
	}
}
const Bainari = (num, type, mode = 0) =>
{
	if (mode == 0)
	{
		num = Number(num)
		return num.toString(type)
	} else if (mode == 1)
	{
		num = String(num)
		return parseInt(num, type)
	}
}
const Random = (num) =>
{
	return Math.floor(Math.random() * num);
};
const nCr = (n = 1, r = 1) =>
{
	//nCr
	let x, z;
	let y;
	let age = 1;
	y = n;
	z = r;
	x = 0;
	while (x == 0)
	{
		if (r == 1)
		{
			y = y * r;
		}
		r--;
		if (r == 0)
		{
			x++;
		} else
		{
			n--;
			if (n == 0)
			{
				x++;
				break;
			}
			y = y * n;
		}
	}
	for (let i = 2; i <= z; i++)
	{
		age *= i;
	}
	y = y / age;
	return y;
}
const Pow = (num, n) =>
{
	//xのy乗
	let nums = num;
	for (let i = 2; i <= n; i++)
	{
		nums *= num;
	}
	return nums;
}
const Repetition = (x = 1) =>
{
	//階乗
	let age = 1;
	for (let i = 2; i <= x; i++)
	{
		age *= i;
	}
	return age;
}
const nPr = (n, r) =>
{
	//nPr
	let y;
	let x = 0;
	y = n;
	while (x == 0)
	{
		if (r == 1)
		{
			y = y * r;
		}
		r--;
		if (r == 0)
		{
			x++;
		} else
		{
			n--;
			if (n == 0)
			{
				x++;
				break;
			}
			y = y * n;
		}
	}
	return y;
}
const Gcd = (f = 1, x = 1) =>
{
	//最大公約数
	let r, tmp;
	if (f < x)
	{
		tmp = f;
		f = x;
		x = tmp;
	}
	/* ユークリッドの互除法 */
	r = f % x;
	while (r != 0)
	{
		f = x;
		x = r;
		r = f % x;
	}
	return x;
}
const Ratio = (a, b, x, y) =>
{
	//比率
	a *= y;
	b *= x;
	if (a < b)
	{
		if ((b % a) == 0)
		{
			return b / a;
		} else
		{
			return `${a}/${b}`;
		}
	} else
	{
		if ((a % b) == 0)
		{
			return a / b;
		} else
		{
			return `${b}/${a}`;
		}
	}
}
const Diagonal = (n) =>
{
	//対角線の数
	n = (n * (n - 3)) / 2;
	return n;
}
const Maths = new maths();
const Mathsnew = () =>
{
	let math = new maths();
	return math;
}
const Css = new css();
/*let Cssnew = () => {
	let cs = new css();
	return cs;
}*/

const Zeller = (y = 2000, m = 1, d = 1, lan = 'jp') =>
{
	if (m < 3)
	{
		y--;
		m += 12;
	}
	const w = (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((13 * m + 8) / 5) + d) % 7;
	if (w == 0)
	{
		if (lan = 'en')
		{
			w = "Sunday"
		}
		else if (lan = 'jp')
		{
			w = "日曜日";
		}
	} else if (w == 1)
	{
		if (lan = 'en')
		{
			w = "Manday"
		}
		else if (lan = 'jp')
		{
			w = "月曜日";
		}
	} else if (w == 2)
	{
		if (lan = 'en')
		{
			w = "Tuesday"
		}
		else if (lan = 'jp')
		{
			w = "火曜日";
		}
	} else if (w == 3)
	{
		if (lan = 'en')
		{
			w = "Wedneday"
		}
		else if (lan = 'jp')
		{
			w = "水曜日";
		}
	} else if (w == 4)
	{
		if (lan = 'en')
		{
			w = "Thursday"
		}
		else if (lan = 'jp')
		{
			w = "木曜日";
		}
	} else if (w == 5)
	{
		if (lan = 'en')
		{
			w = "Friday"
		}
		else if (lan = 'jp')
		{
			w = "金曜日";
		}
	} else
	{
		if (lan = 'en')
		{
			w = "Saturday"
		}
		else if (lan = 'jp')
		{
			w = "土曜日";
		}
	}
	return w;
}
const SVG = (data, option) =>
{
	if (option == 'ellipse')
	{
		data = <svg width="400" height="200" viewBox="0, 0, 400, 200" xmlns="http://www.w3.org/2000/svg">
			<ellipse cx="200" cy="100" rx="200" ry="100" fill="#e74c3c" />
		</svg>
	}
	return (
		data
	)
}
const Push = (array, text) =>
{
	let Pushs = array.push(text);
	return Pushs
}
const Com = (num, num2) =>
{
	let gcdnum = Gcd(3, 4);
	num = (num * num2) / gcdnum;
	return num;
}
const Spt = (num = 1, num2 = 1) =>
{
	num2 = num + num2;
	num *= 100;
	return num / num2;
}
const Day = new Date();
const sleeptime = msec => new Promise(resolve => setTimeout(resolve, msec));
async function sleep(num, callback = () => { }) 
{
	await sleeptime(num);
	callback()
}
export
{
	Bainari,
	sleep,
	Modal_simple,
	Accordion,
	Thedetails,
	Text,
	Maths,
	Mathsnew,
	maths,
	Random,
	nCr,
	nPr,
	Pow,
	Repetition,
	Gcd,
	Ratio,
	Diagonal,
	Zeller,
	Push,
	Com,
	Spt,
	Window,
	Day,
	Css,
	Button,
	Aimg,
	CSS,
	Search,
	//Ajax
	Time,
	jQuery,
	$,
	Beta,
	UTF,
	SVG
};
//α version