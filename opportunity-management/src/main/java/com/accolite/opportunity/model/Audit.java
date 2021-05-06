package com.accolite.opportunity.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "audit")
public class Audit {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="opid")
	private long opid;
	
	@Column(name = "mname")
	private String mname;
	
	@Column(name = "memail")
	private String memail;
	
	@Column(name = "title")
	private String title;
	
	@Column(name = "description")
	private String description;

	@Column(name = "vacancy")
	private int vacancy;
	
	
	@Column(name = "location")
	private String location;
	
	@Column(name = "skills")
	private String skills;
	
	@Column(name = "endDate")
	private Date endDate;
	

	@Column(name = "startDate")
	private Date startDate;
	
	@Column(name = "updateDate")
	private Date updateDate;
	
	@Column(name = "version")
	private int version;
	public Audit() {
		
	}
	public Audit(long opid , String mname, String memail, String title, String description, int vacancy, String location,
			String skills , Date endDate , Date startDate , Date updateDate , int version) {
		super();
		this.opid = opid;
		this.mname = mname;
		this.memail = memail;
		this.title = title;
		this.description = description;
		this.vacancy = vacancy;
		this.location = location;
		this.skills = skills;
		this.endDate = endDate;
		this.startDate = startDate;
		this.updateDate = updateDate;
		this.version = version;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getOpid() {
		return opid;
	}
	public void setOpid(long opid) {
		this.opid = opid;
	}
	public String getMname() {
		return mname;
	}
	public void setMname(String mname) {
		this.mname = mname;
	}
	public String getMemail() {
		return memail;
	}
	public void setMemail(String memail) {
		this.memail = memail;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getVacancy() {
		return vacancy;
	}
	public void setVacancy(int vacancy) {
		this.vacancy = vacancy;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	
	public Date getUpdateDate() {
		return updateDate;
	}
	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}
	public int getVersion() {
		return version;
	}
	public void setVersion(int version) {
		this.version = version;
	}
	
	
	
}