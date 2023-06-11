'use client'

import React from 'react'
import {
  Radar,
  RadarChart as RadarChartLib,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

export default function RadarChart({
  data,
}: {
  data: {
    subject: string
    A: number
    B: number
    C: number
    fullMark: number
  }[]
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChartLib cx="50%" cy="50%" outerRadius="75%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" fontSize="15px" />
        <PolarRadiusAxis angle={90} domain={[0, 10]} />
        <Radar
          name="Perfil"
          dataKey="A"
          stroke="red"
          fill="red"
          fillOpacity={0.6}
        />
        <Radar
          name="Afetivo"
          dataKey="B"
          stroke="blue"
          fill="blue"
          fillOpacity={0.6}
        />
        <Radar
          name="Emocional"
          dataKey="C"
          stroke="green"
          fill="green"
          fillOpacity={0.6}
        />
      </RadarChartLib>
    </ResponsiveContainer>
  )
}
