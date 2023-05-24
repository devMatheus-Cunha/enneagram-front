import { NextResponse } from 'next/server'

const response = {
  data: [
    {
      id: '1',
      name: 'John',
      date: '2022-01-01T00:00:00.000Z',
      linkPdf: 'https://example.com/pdf1',
      linkGrafic: 'https://example.com/grafic1',
    },
    {
      id: '2',
      name: 'Jane',
      date: '2022-02-01T00:00:00.000Z',
      linkPdf: 'https://example.com/pdf2',
      linkGrafic: 'https://example.com/grafic2',
    },
    {
      id: '3',
      name: 'Bob',
      date: '2022-03-01T00:00:00.000Z',
      linkPdf: 'https://example.com/pdf3',
      linkGrafic: 'https://example.com/grafic3',
    },
    {
      id: '4',
      name: 'Alice',
      date: '2022-04-01T00:00:00.000Z',
      linkPdf: 'https://example.com/pdf4',
      linkGrafic: 'https://example.com/grafic4',
    },
    {
      id: '5',
      name: 'Mark',
      date: '2022-05-01T00:00:00.000Z',
      linkPdf: 'https://example.com/pdf5',
      linkGrafic: 'https://example.com/grafic5',
    },
    {
      id: '6',
      name: 'Mark',
      date: '2022-05-01T00:00:00.000Z',
      linkPdf: 'https://example.com/pdf5',
      linkGrafic: 'https://example.com/grafic5',
    },
    {
      id: '7',
      name: 'Mark',
      date: '2022-05-01T00:00:00.000Z',
      linkPdf: 'https://example.com/pdf5',
      linkGrafic: 'https://example.com/grafic5',
    },
    {
      id: '8',
      name: 'Mark',
      date: '2022-05-01T00:00:00.000Z',
      linkPdf: 'https://example.com/pdf5',
      linkGrafic: 'https://example.com/grafic5',
    },
    {
      id: '9',
      name: 'Mark',
      date: '2022-05-01T00:00:00.000Z',
      linkPdf: 'https://example.com/pdf5',
      linkGrafic: 'https://example.com/grafic5',
    },
  ],
}

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return NextResponse.json(response)
}
