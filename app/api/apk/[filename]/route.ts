import { NextRequest, NextResponse } from 'next/server';
import { getRedirectBaseUrl } from '../../../lib/apkData';

export async function GET(request: NextRequest, { params }: { params: { filename: string } }) {
  const filename = params.filename;

  if (!filename) {
    return NextResponse.json({ error: 'Filename is required' }, { status: 400 });
  }

  const redirectBaseUrl = getRedirectBaseUrl(filename);
  const targetUrl = `${redirectBaseUrl}/${encodeURIComponent(filename)}`;
  return NextResponse.redirect(targetUrl, 307);
}
