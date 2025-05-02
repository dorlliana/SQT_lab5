<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title><xsl:value-of select="admission/name_admission"/></title>
                <link rel="stylesheet" href="chapter3.css" type="text/css" />
            </head>
            <body>
                <h2><xsl:value-of select="admission/name_admission"/></h2>
                <table class="listadmission" border="1" cellspacing="0" cellpadding="20">
                    <thead>
                        <tr>
                            <td class="header" colspan="5">Students data</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>Second Name</th>
                            <th>Patronymic</th>
                            <th>Previous Education</th>
                            <th>Faculty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="admission/student">
                        <tr>
                            <td class="name"><xsl:value-of select="firstName"/></td>
                            <td class="surname"><xsl:value-of select="lastName"/></td>
                            <td class="patronymic"><xsl:value-of select="patronymic"/></td>
                            <td class="education"><xsl:value-of select="previousEducation"/></td>
                            <td class="faculty"><xsl:value-of select="faculty"/></td>
                        </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
