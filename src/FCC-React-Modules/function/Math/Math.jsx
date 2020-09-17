class maths
{
    constructor()
    {
        this.random = (num) =>
        {
            let test = Math.floor(Math.random() * num);
            return test;
        }
        this.sqrt = (n) =>
        {
            //平方根
            let sqrts = Math.sqrt(n);
            return sqrts;
        }
        this.repetition = (x) =>
        {
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
            //重複を許して取り出す
            n = n + r - 1;
            n = Maths.ncr(n, r);
            return n;
        }
        this.gcd = (f, x) =>
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
        this.npr = (n, r) =>
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
        this.ratio = (a, b, x, y) =>
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
        this.diagonal = (n) =>
        {
            //対角線の数
            n = (n * (n - 3)) / 2;
            return n;
        }
        this.pow = (num, n) =>
        {
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
            a = `${a * a}+${2 * a * b}+${b * b}`;
            return a;
        }
        this.rpMultiplicative = (a, b) =>
        {
            a = `(${Math.sqrt(a)}+${Math.sqrt(b)})^2`;
            return a;
        }
        this.mMultiplicative = (a, b) =>
        {
            a = `${a * a}-${2 * a * b}+${b * b}`;
            return a;
        }
        this.rmMultiplicative = (a, b) =>
        {
            a = `(${Math.sqrt(a)}-${Math.sqrt(b)})^2`;
            return a;
        }
        this.pmMultiplicative = (a, b) =>
        {
            a = `${a * a}-${b * b}`;
            return a;
        }
        this.rpmMultiplicative = (a, b) =>
        {
            a = `(${Math.sqrt(a)}+${Math.sqrt(b)})(${Math.sqrt(a)}-${Math.sqrt(b)})`;
            return a;
        }
        this.Pythagorean = (a, b) =>
        {
            a = a * a + b * b;
            return a;
        }
        this.rPythagorean = (a, b) =>
        {
            a = a * a - b * b;
            return a;
        }
        this.Binarynumber = (num) =>
        {
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

export default maths;