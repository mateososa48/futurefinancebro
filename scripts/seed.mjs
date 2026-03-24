// Run once: node scripts/seed.mjs
// Creates 8 placeholder articles in Sanity for UI development.

const PROJECT_ID = 'mnplljez'
const DATASET    = 'production'
const API_VER    = '2024-01-01'
const TOKEN      = 'skqYa3IfN01vTqlXlekv3Gmu3UuEF19IG3VhxOZhDsTlhGnrMYOyKw10Gijm9ZWVkXIbPHKX3kGF08M3lSzZexy0LONja9IQQfR4Tx1fU5J5VgYonICrqwF7UDhKbDoJKK6aNGXDpRNaJgYWDE1g3wJQAP5H9pq9kMq3YfbdVKeZf8Nb726b'

const URL = `https://${PROJECT_ID}.api.sanity.io/v${API_VER}/data/mutate/${DATASET}`

// Helper: build a portable-text paragraph block
function block(text, key) {
  return {
    _type: 'block',
    _key: key,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: key + 's', text, marks: [] }],
  }
}

function h2(text, key) {
  return {
    _type: 'block',
    _key: key,
    style: 'h2',
    markDefs: [],
    children: [{ _type: 'span', _key: key + 's', text, marks: [] }],
  }
}

const articles = [
  // ── MARKETS ──────────────────────────────────────────────────────────────────
  {
    _id:         'seed-markets-1',
    _type:       'post',
    title:       "The Fed's Next Move: What Investors Need to Know Before Tuesday",
    slug:        { _type: 'slug', current: 'fed-next-move' },
    category:    'markets',
    publishedAt: '2026-03-21T09:00:00Z',
    excerpt:     'Federal Reserve officials have signaled a cautious approach to rate cuts, leaving markets uncertain about the path ahead for borrowing costs and asset valuations.',
    body: [
      block('Financial markets rarely move in a straight line, and the forces driving current conditions are no exception. A confluence of macroeconomic pressures, shifting monetary policy expectations, and evolving investor sentiment has created a landscape that rewards careful analysis over reactive decision-making.', 'b1'),
      h2('The Broader Context', 'h1'),
      block('To appreciate what is happening now, it helps to step back and consider the arc of the past several years. The post-pandemic recovery unleashed a wave of fiscal stimulus that drove consumer spending well above trend, while supply chain disruptions constrained the availability of goods.', 'b2'),
      block('Central banks responded with the most aggressive rate-hiking cycles in decades. The Federal Reserve raised its benchmark rate from near zero to over five percent in under two years — a pace not seen since the early 1980s.', 'b3'),
      h2('What the Data Is Telling Us', 'h2'),
      block('Recent economic data paints a picture that is more nuanced than either the optimists or the pessimists would have you believe. Headline inflation has cooled substantially from its peak, but core services inflation has proven stickier than most forecasters anticipated.', 'b4'),
      block('For investors, the current environment calls for a clear-eyed assessment of where risks and opportunities actually lie. Duration risk in fixed income deserves particular attention. Short-duration instruments now offer yields that look attractive relative to their historical range.', 'b5'),
    ],
  },
  {
    _id:         'seed-markets-2',
    _type:       'post',
    title:       'Tech Valuations Are Climbing Again. This Time Might Be Different.',
    slug:        { _type: 'slug', current: 'tech-valuations' },
    category:    'markets',
    publishedAt: '2026-03-17T09:00:00Z',
    excerpt:     'AI-driven earnings growth is reshaping the calculus on what "overvalued" looks like for large-cap technology companies.',
    body: [
      block('The debate over technology valuations has been a constant backdrop for equity markets over the past five years. After the brutal compression of 2022, multiples have expanded again — and this time, the bulls argue, there is a genuine earnings story to support them.', 'b1'),
      h2('AI as an Earnings Catalyst', 'h1'),
      block('Unlike the revenue-multiple expansion of the 2020-2021 era, the current repricing in large-cap tech is being driven by actual earnings growth. Several of the largest technology companies have reported margin expansion alongside revenue acceleration — a combination that historically justifies higher multiples.', 'b2'),
      block('The key question is not whether AI is real, but whether the monetization is durable. Early evidence suggests that enterprise software buyers are willing to pay meaningfully more for AI-enhanced products — a positive sign for pricing power.', 'b3'),
      h2('The Risks Worth Watching', 'h2'),
      block('Concentration risk remains the most obvious concern. The top six technology companies now represent over 30% of the S&P 500 by market cap. Any meaningful derating in that cohort would be felt across virtually every equity portfolio.', 'b4'),
      block('Regulatory risk is also non-trivial. Antitrust scrutiny has intensified in both the United States and Europe, and the outcomes of several ongoing investigations could materially affect the competitive landscape.', 'b5'),
    ],
  },

  // ── INVESTING ─────────────────────────────────────────────────────────────────
  {
    _id:         'seed-investing-1',
    _type:       'post',
    title:       "Private Credit's Rise: Inside Wall Street's Fastest-Growing Asset Class",
    slug:        { _type: 'slug', current: 'private-credit' },
    category:    'investing',
    publishedAt: '2026-03-20T09:00:00Z',
    excerpt:     'A structural shift in lending has sent trillions of dollars toward private markets, reshaping how companies borrow and how investors build portfolios.',
    body: [
      block('Private credit has gone from a niche corner of the alternatives universe to one of the most talked-about asset classes in finance. Assets under management have grown from under $500 billion a decade ago to over $2 trillion today, and the pace of growth shows few signs of slowing.', 'b1'),
      h2('Why Borrowers Are Choosing Private Lenders', 'h1'),
      block('The appeal for borrowers is straightforward: speed and certainty. A private credit fund can commit to a deal in days; a syndicated loan process can take weeks or months. For private equity sponsors running competitive auction processes, that speed difference is worth paying a premium.', 'b2'),
      block('The structural retreat of banks from middle-market lending — driven by regulatory capital requirements implemented after 2008 — created a gap that private credit funds have systematically filled. That dynamic is unlikely to reverse.', 'b3'),
      h2('What Investors Are Getting', 'h2'),
      block('The return profile has been compelling: private credit strategies have historically offered a 200-400 basis point premium over comparable public credit. In a world of compressed yields, that spread has attracted capital from pension funds, insurers, and sovereign wealth funds.', 'b4'),
      block('The risks are real, however. Illiquidity is the most obvious: private credit positions cannot be sold quickly. Credit quality also varies significantly across the market, and some funds have reached further down the quality spectrum in search of returns.', 'b5'),
    ],
  },
  {
    _id:         'seed-investing-2',
    _type:       'post',
    title:       'What the Yield Curve Is Telling Us About the Economy Right Now',
    slug:        { _type: 'slug', current: 'yield-curve' },
    category:    'investing',
    publishedAt: '2026-03-16T09:00:00Z',
    excerpt:     'Treasury spreads have shifted meaningfully in the past 30 days. Here is what the signal means for bond and equity investors alike.',
    body: [
      block('The yield curve is one of the most closely watched signals in all of finance — and for good reason. Inversions have preceded every U.S. recession in the modern era. The current configuration deserves careful reading.', 'b1'),
      h2('Reading the Current Curve', 'h1'),
      block('The 2-year/10-year spread has moved from deeply inverted to nearly flat over the past six months. Historically, this kind of steepening has occurred either as the economy recovers from a slowdown (bull steepening) or as short rates fall while long rates hold firm (bear steepening).', 'b2'),
      block('The distinction matters enormously for investors. Bull steepening tends to be equity-positive and credit-positive. Bear steepening — driven by concerns about fiscal deficits or inflation persistence — tends to be more disruptive.', 'b3'),
      h2('Implications for Your Portfolio', 'h2'),
      block('Bond investors should pay particular attention to duration positioning. If the steepening continues, long-duration bonds face headwinds even as short-duration instruments see stable or improving prices.', 'b4'),
      block('For equity investors, the sector implications are significant. Financials — particularly banks — tend to benefit from a steeper curve. Utilities and other long-duration equity proxies face more pressure in a bear steepening environment.', 'b5'),
    ],
  },

  // ── ECONOMY ───────────────────────────────────────────────────────────────────
  {
    _id:         'seed-economy-1',
    _type:       'post',
    title:       'Why Retail Sales Beat Expectations Despite Consumer Pessimism',
    slug:        { _type: 'slug', current: 'retail-sales' },
    category:    'economy',
    publishedAt: '2026-03-19T09:00:00Z',
    excerpt:     'The gap between how Americans feel and how they spend is widening — and economists are divided on what it signals for growth.',
    body: [
      block('Consumer confidence surveys and actual spending data have rarely diverged this sharply. Sentiment readings remain well below their pre-pandemic levels, yet retail sales have continued to come in above consensus expectations month after month.', 'b1'),
      h2('The Sentiment-Spending Disconnect', 'h1'),
      block('Several explanations have been offered for this divergence. The most compelling is compositional: higher-income households, whose spending makes up a disproportionate share of total consumption, have been largely insulated from the pressures that weigh on sentiment among lower-income Americans.', 'b2'),
      block('Asset-price appreciation has also played a role. The wealth effect — the tendency of households to spend more when their net worth rises — has been concentrated among homeowners and equity investors, groups that have seen significant balance sheet appreciation over the past three years.', 'b3'),
      h2('What This Means for Growth', 'h2'),
      block('The divergence between sentiment and spending creates genuine uncertainty for forecasters. If sentiment ultimately proves predictive — as it has historically — current spending levels may prove unsustainable. But if spending is the better indicator, the economy may be more resilient than the survey data suggests.', 'b4'),
      block('The honest answer is that both signals carry information. The spending data tells us what is happening today; the sentiment data may be telling us about tomorrow. Investors would be wise to monitor both closely.', 'b5'),
    ],
  },
  {
    _id:         'seed-economy-2',
    _type:       'post',
    title:       'Global Trade Flows Show Early Signs of Realignment',
    slug:        { _type: 'slug', current: 'trade-flows' },
    category:    'economy',
    publishedAt: '2026-03-15T09:00:00Z',
    excerpt:     'New shipping data reveals that trade routes are quietly shifting as companies adjust supply chains amid prolonged tariff uncertainty.',
    body: [
      block('The great supply chain reconfiguration that began as a pandemic-era talking point is starting to show up in the data. Container shipping routes, factory location decisions, and bilateral trade statistics all point to a gradual but meaningful reorientation of global commerce.', 'b1'),
      h2('Where the Shifts Are Happening', 'h1'),
      block('The most visible change is the rise of what economists call "connector" economies — countries like Vietnam, Mexico, and India that are absorbing manufacturing capacity that previously sat in China. These countries have seen export growth well above global averages over the past two years.', 'b2'),
      block('Mexico deserves particular attention. Proximity to the U.S. market, combined with the provisions of the USMCA trade agreement, has made it an attractive destination for nearshoring. U.S.-Mexico trade volumes have hit successive records over the past 18 months.', 'b3'),
      h2('The Investment Implications', 'h2'),
      block('Supply chain realignment creates winners and losers. The beneficiaries include companies with established manufacturing presences in the connector economies, logistics providers building out new routes, and infrastructure developers serving booming industrial zones.', 'b4'),
      block('The risks fall on companies that have not yet adapted. Firms with heavily concentrated supply chains — particularly those still dependent on single-country sourcing — face both operational risk and potential political risk as trade policy continues to evolve.', 'b5'),
    ],
  },

  // ── PERSONAL FINANCE ─────────────────────────────────────────────────────────
  {
    _id:         'seed-pf-1',
    _type:       'post',
    title:       "The 2026 Tax Changes Most People Haven't Heard About",
    slug:        { _type: 'slug', current: 'tax-changes-2026' },
    category:    'personal-finance',
    publishedAt: '2026-03-18T09:00:00Z',
    excerpt:     "From retirement contribution limits to new capital gains brackets, here's what changes this year and how to position yourself.",
    body: [
      block('Every year brings tax code adjustments, and 2026 is no exception. But several of this year\'s changes are more consequential than typical inflation adjustments — and most people have not been paying attention.', 'b1'),
      h2('Retirement Contribution Limits Are Up', 'h1'),
      block('The IRS has raised 401(k) contribution limits to $24,500 for 2026, up from $23,500. The catch-up contribution limit for those 50 and older has also increased, to $8,500. If you are not already maxing out your retirement accounts, now is a good time to revisit your contribution rate.', 'b2'),
      block('IRA contribution limits have also increased slightly. The combined traditional and Roth IRA limit is now $7,500 — or $9,000 for those 50 and older. Income thresholds for Roth IRA eligibility have been adjusted for inflation as well.', 'b3'),
      h2('Capital Gains: What Changed', 'h2'),
      block('The income thresholds for preferential long-term capital gains rates have shifted. The 0% rate now applies to taxable income up to $48,350 for single filers and $96,700 for married couples filing jointly. The 15% rate applies above those thresholds up to approximately $533,400 for singles.', 'b4'),
      block('One change that has received surprisingly little attention: the rules around inherited IRAs continue to evolve. Beneficiaries who inherited IRAs after 2019 are subject to a 10-year drawdown rule, and the IRS has now clarified that annual distributions are required during that period — not just a lump sum at year 10.', 'b5'),
    ],
  },
  {
    _id:         'seed-pf-2',
    _type:       'post',
    title:       'The Real Cost of Waiting to Invest',
    slug:        { _type: 'slug', current: 'cost-of-waiting' },
    category:    'personal-finance',
    publishedAt: '2026-03-03T09:00:00Z',
    excerpt:     'Compounding is often described but rarely felt — until you run the actual numbers. A decade of delay costs more than most people expect.',
    body: [
      block('Time is the most powerful variable in personal finance, and most people underestimate it. The mathematics of compounding are simple in concept and staggering in practice — particularly when applied to realistic investment horizons.', 'b1'),
      h2('Running the Numbers', 'h1'),
      block('Consider two investors. The first starts investing $500 per month at age 25 and stops at 35 — contributing for exactly 10 years, then letting the money grow untouched. The second waits until 35 to start but invests $500 per month continuously until age 65 — contributing for 30 years.', 'b2'),
      block('Assuming a 7% average annual return, the first investor ends up with more money at 65 — despite contributing for less than a third as long. The early start more than compensates for the smaller total contribution. This is the compounding effect in concrete terms.', 'b3'),
      h2('The Psychology of Waiting', 'h2'),
      block('Most people who delay investing do not do so because they have run the numbers and made a deliberate choice. They delay because starting feels complicated, because they are waiting for the "right time," or because they are prioritizing other spending. None of these are rational reasons to forgo decades of compounding.', 'b4'),
      block('The right time to invest is almost always now — not because markets are cheap or conditions are favorable, but because time in the market is more valuable than timing the market. Every year of delay has a cost. The earlier you start, the smaller that cost.', 'b5'),
    ],
  },
]

// Build mutation payload
const mutations = articles.map(doc => ({ createOrReplace: doc }))

const res = await fetch(URL, {
  method:  'POST',
  headers: {
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${TOKEN}`,
  },
  body: JSON.stringify({ mutations }),
})

const data = await res.json()

if (!res.ok) {
  console.error('Error:', JSON.stringify(data, null, 2))
  process.exit(1)
}

console.log(`✓ Created / updated ${data.results?.length ?? 0} documents`)
data.results?.forEach(r => console.log(`  - ${r.id} [${r.operation}]`))
