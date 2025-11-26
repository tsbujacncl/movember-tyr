export default async (request, context) => {
  const MOVEMBER_URL = 'https://uk.movember.com/mospace/15524001';

  try {
    const response = await fetch(MOVEMBER_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; MovemberDonationTracker/1.0)'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();

    // Look for donation amount in the HTML
    // Movember typically shows this in various formats, we'll try multiple patterns
    const patterns = [
      /£([\d,]+(?:\.\d{2})?)/,
      /raised[^£]*£([\d,]+(?:\.\d{2})?)/i,
      /"amount":\s*"?£?([\d,]+(?:\.\d{2})?)"/,
      /data-amount="([\d,]+(?:\.\d{2})?)"/,
      /total[^£]*£([\d,]+(?:\.\d{2})?)/i
    ];

    let amount = null;

    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match) {
        // Remove commas and parse as float
        amount = parseFloat(match[1].replace(/,/g, ''));
        if (!isNaN(amount)) break;
      }
    }

    if (amount === null) {
      // Fallback: try to find any currency amount on the page
      const fallbackMatch = html.match(/£([\d,]+)/);
      if (fallbackMatch) {
        amount = parseFloat(fallbackMatch[1].replace(/,/g, ''));
      }
    }

    return new Response(
      JSON.stringify({
        amount: amount || 0,
        timestamp: new Date().toISOString(),
        source: MOVEMBER_URL
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
        }
      }
    );
  } catch (error) {
    console.error('Error fetching donation amount:', error);

    return new Response(
      JSON.stringify({
        error: 'Failed to fetch donation amount',
        message: error.message
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};
