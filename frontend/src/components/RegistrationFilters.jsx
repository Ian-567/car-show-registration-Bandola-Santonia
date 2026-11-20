function RegistrationFilters({
  participantName,
  type,
  status,
  onParticipantNameChange,
  onTypeChange,
  onStatusChange,
}) {
  return (
    <div className="filters">
      <div className="filter-group">
        <label>Participant Name</label>

        <input
          type="text"
          placeholder="Search participant..."
          value={participantName}
          onChange={(e) => onParticipantNameChange(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label>Registration Type</label>

        <select
          value={type}
          onChange={(e) => onTypeChange(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Regular">Regular</option>
          <option value="VIP">VIP</option>
          <option value="Exhibitor">Exhibitor</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Status</label>

        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
    </div>
  );
}

export default RegistrationFilters;