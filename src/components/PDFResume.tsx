// src/components/PDFResume.tsx
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { RESUME_DATA } from "@/constants/resume";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: "#666",
  },
  contact: {
    fontSize: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  skillCategory: {
    width: "48%",
    marginBottom: 10,
  },
  skillTitle: {
    fontSize: 12,
    marginBottom: 5,
  },
  skillItem: {
    fontSize: 10,
    backgroundColor: "#f3f4f6",
    padding: 4,
    borderRadius: 4,
    marginRight: 5,
    marginBottom: 5,
  },
  experienceItem: {
    marginBottom: 15,
  },
  companyInfo: {
    fontSize: 12,
    marginBottom: 5,
  },
  bulletPoint: {
    fontSize: 10,
    marginBottom: 3,
  },
});

export const PDFResume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{RESUME_DATA.name}</Text>
        <Text style={styles.subtitle}>{RESUME_DATA.title}</Text>
        <View style={styles.contact}>
          {Object.entries(RESUME_DATA.contact).map(([key, value]) => (
            <Text key={key}>
              {key}: {value}
            </Text>
          ))}
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text>{RESUME_DATA.summary}</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.skillsGrid}>
          {Object.entries(RESUME_DATA.skills).map(([category, items]) => (
            <View key={category} style={styles.skillCategory}>
              <Text style={styles.skillTitle}>{category}</Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {items.map((item) => (
                  <Text key={item} style={styles.skillItem}>
                    {item}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {RESUME_DATA.experience.map((exp, index) => (
          <View key={index} style={styles.experienceItem}>
            <Text style={styles.companyInfo}>
              {exp.title} | {exp.company} | {exp.duration}
            </Text>
            {exp.highlights.map((highlight, i) => (
              <Text key={i} style={styles.bulletPoint}>
                • {highlight}
              </Text>
            ))}
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.companyInfo}>{RESUME_DATA.education.degree}</Text>
        <Text>
          {RESUME_DATA.education.school} | {RESUME_DATA.education.year}
        </Text>
      </View>
    </Page>
  </Document>
);
